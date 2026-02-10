(function () {
  function setStatus(statusBox, state, message) {
    if (!statusBox) return;
    statusBox.classList.add('is-visible');
    statusBox.setAttribute('data-state', state);
    statusBox.textContent = message;
  }

  function validateForm(form) {
    const messageField = form.querySelector('[name="mensaje"]');
    if (!messageField) return true;

    const value = String(messageField.value || '').trim();
    return value.length >= 20;
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusBox = document.getElementById('formStatus');
    if (!form || !statusBox) return;

    const endpoint = (window.SITE_CONFIG && window.SITE_CONFIG.formspreeEndpoint) || '';
    if (endpoint) {
      form.action = endpoint;
    }

    form.addEventListener('submit', async (event) => {
      if (!validateForm(form)) {
        event.preventDefault();
        setStatus(statusBox, 'warning', 'El mensaje debe tener al menos 20 caracteres.');
        return;
      }

      if (!endpoint || endpoint.indexOf('your-form-id') !== -1) {
        event.preventDefault();
        setStatus(statusBox, 'warning', 'Configura tu endpoint real de Formspree en assets/js/site-config.js para habilitar el envio.');
        return;
      }

      event.preventDefault();
      setStatus(statusBox, 'sending', 'Enviando consulta...');

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton ? submitButton.textContent : '';
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        form.reset();
        setStatus(statusBox, 'success', 'Mensaje enviado con exito. Te contactaremos pronto.');
      } catch (error) {
        setStatus(statusBox, 'error', 'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel || 'Enviar mensaje';
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();
