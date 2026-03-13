(function () {
  var MIN_FILL_TIME_MS = 4000;
  var RESUBMIT_WINDOW_MS = 60000;
  var MAX_MESSAGE_LENGTH = 2000;
  var STORAGE_KEY = "avtweb:last-contact-submit-at";
  var turnstileWidgetId = null;

  function setStatus(statusBox, state, message) {
    if (!statusBox) return;
    statusBox.classList.add("is-visible");
    statusBox.setAttribute("data-state", state);
    statusBox.textContent = message;
  }

  function readLastSubmitAt() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      var value = Number(raw || 0);
      return Number.isFinite(value) ? value : 0;
    } catch (error) {
      return 0;
    }
  }

  function writeLastSubmitAt(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch (error) {
      // Ignore storage failures in private mode or restricted browsers.
    }
  }

  function countUrls(value) {
    var matches = String(value || "").match(/https?:\/\/|www\./gi);
    return matches ? matches.length : 0;
  }

  function validateForm(form, startedAt, turnstileToken) {
    var honeyPot = form.querySelector('[name="_gotcha"]');
    var websiteTrap = form.querySelector('[name="website"]');
    var nameField = form.querySelector('[name="nombre"]');
    var emailField = form.querySelector('[name="email"]');
    var phoneField = form.querySelector('[name="telefono"]');
    var companyField = form.querySelector('[name="empresa"]');
    var messageField = form.querySelector('[name="mensaje"]');

    if ((honeyPot && String(honeyPot.value || "").trim()) || (websiteTrap && String(websiteTrap.value || "").trim())) {
      return { ok: false, message: "No se pudo procesar el envio. Intenta nuevamente." };
    }

    if (Date.now() - startedAt < MIN_FILL_TIME_MS) {
      return { ok: false, message: "Espera unos segundos antes de enviar el formulario." };
    }

    if (readLastSubmitAt() && Date.now() - readLastSubmitAt() < RESUBMIT_WINDOW_MS) {
      return { ok: false, message: "Espera un minuto antes de enviar otra consulta." };
    }

    if (!nameField || String(nameField.value || "").trim().length < 3) {
      return { ok: false, message: "Ingresa un nombre valido." };
    }

    if (!emailField || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(emailField.value || "").trim())) {
      return { ok: false, message: "Ingresa un correo electronico valido." };
    }

    if (phoneField) {
      var phoneValue = String(phoneField.value || "").trim();
      if (phoneValue && !/^[0-9+()\-\s]{7,20}$/.test(phoneValue)) {
        return { ok: false, message: "El telefono debe contener solo numeros y caracteres basicos." };
      }
    }

    if (companyField && String(companyField.value || "").trim().length > 120) {
      return { ok: false, message: "El nombre de la empresa es demasiado largo." };
    }

    if (!messageField) {
      return { ok: false, message: "El mensaje es obligatorio." };
    }

    var messageValue = String(messageField.value || "").trim();
    if (messageValue.length < 20) {
      return { ok: false, message: "El mensaje debe tener al menos 20 caracteres." };
    }

    if (messageValue.length > MAX_MESSAGE_LENGTH) {
      return { ok: false, message: "El mensaje es demasiado largo." };
    }

    if (countUrls(messageValue) > 1) {
      return { ok: false, message: "No incluyas multiples enlaces en el mensaje." };
    }

    if (!turnstileToken) {
      return { ok: false, message: "Completa la verificacion de seguridad antes de enviar." };
    }

    return { ok: true };
  }

  function getTurnstileToken() {
    if (typeof window.turnstile === "undefined" || turnstileWidgetId === null) {
      return "";
    }

    try {
      return String(window.turnstile.getResponse(turnstileWidgetId) || "").trim();
    } catch (error) {
      return "";
    }
  }

  function resetTurnstile() {
    if (typeof window.turnstile === "undefined" || turnstileWidgetId === null) {
      return;
    }

    try {
      window.turnstile.reset(turnstileWidgetId);
    } catch (error) {
      // Ignore widget reset failures.
    }
  }

  function renderTurnstile(widgetElement, siteKey, statusBox) {
    if (!widgetElement) return false;

    if (!siteKey || siteKey.indexOf("your-turnstile-site-key") !== -1) {
      setStatus(statusBox, "warning", "Configura tu site key real de Turnstile en assets/js/site-config.js para habilitar el envio.");
      return false;
    }

    if (typeof window.turnstile === "undefined" || typeof window.turnstile.render !== "function") {
      setStatus(statusBox, "warning", "No se pudo cargar Turnstile. Revisa la CSP o la conexion a Cloudflare.");
      return false;
    }

    widgetElement.innerHTML = "";
    turnstileWidgetId = window.turnstile.render(widgetElement, {
      sitekey: siteKey,
      theme: "light",
      language: "es"
    });

    return true;
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");
    var statusBox = document.getElementById("formStatus");
    var turnstileElement = document.getElementById("turnstileWidget");
    if (!form || !statusBox) return;

    var endpoint = (window.SITE_CONFIG && window.SITE_CONFIG.contactApiUrl) || "";
    var turnstileSiteKey = (window.SITE_CONFIG && window.SITE_CONFIG.turnstileSiteKey) || "";
    var startedAt = Date.now();
    var startedField = form.querySelector('[name="form_started_at"]');
    var jsField = form.querySelector('[name="js_enabled"]');

    if (startedField) {
      startedField.value = String(startedAt);
    }

    if (jsField) {
      jsField.value = "true";
    }

    renderTurnstile(turnstileElement, turnstileSiteKey, statusBox);

    form.addEventListener("submit", async function (event) {
      var turnstileToken = getTurnstileToken();
      var validation = validateForm(form, startedAt, turnstileToken);
      if (!validation.ok) {
        event.preventDefault();
        setStatus(statusBox, "warning", validation.message);
        return;
      }

      if (!endpoint || endpoint.indexOf("http") !== 0) {
        event.preventDefault();
        setStatus(statusBox, "warning", "Configura tu endpoint real del backend en assets/js/site-config.js para habilitar el envio.");
        return;
      }

      event.preventDefault();
      setStatus(statusBox, "sending", "Enviando consulta...");

      var submitButton = form.querySelector('button[type="submit"]');
      var originalLabel = submitButton ? submitButton.textContent : "";
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
      }

      try {
        var payload = {
          nombre: String(form.nombre.value || "").trim(),
          email: String(form.email.value || "").trim(),
          telefono: String(form.telefono.value || "").trim(),
          empresa: String(form.empresa.value || "").trim(),
          asunto: String(form.asunto.value || "").trim(),
          mensaje: String(form.mensaje.value || "").trim(),
          _gotcha: String((form.querySelector('[name="_gotcha"]') || {}).value || "").trim(),
          website: String((form.querySelector('[name="website"]') || {}).value || "").trim(),
          pageUrl: window.location.href,
          pageTitle: document.title,
          submittedAt: new Date().toISOString(),
          formStartedAt: startedAt,
          jsEnabled: true,
          turnstileToken: turnstileToken
        };

        var response = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          cache: "no-store",
          credentials: "omit",
          mode: "cors"
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        writeLastSubmitAt(Date.now());
        form.reset();
        startedAt = Date.now();
        if (startedField) {
          startedField.value = String(startedAt);
        }
        if (jsField) {
          jsField.value = "true";
        }
        resetTurnstile();
        setStatus(statusBox, "success", "Mensaje enviado con exito. Te contactaremos pronto.");
      } catch (error) {
        resetTurnstile();
        setStatus(statusBox, "error", "No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel || "Enviar mensaje";
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})();
