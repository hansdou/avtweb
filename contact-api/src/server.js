require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const PORT = Number(process.env.PORT || 8080);
const NODE_ENV = process.env.NODE_ENV || "development";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.RESEND_AUDIENCE_EMAIL || "";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "";
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || "";
const TURNSTILE_EXPECTED_HOSTNAME = process.env.TURNSTILE_EXPECTED_HOSTNAME || "";
const allowedOrigins = String(process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

app.disable("x-powered-by");
app.set("trust proxy", true);

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || !allowedOrigins.length || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed"));
    },
    methods: ["GET", "POST", "OPTIONS"]
  })
);

function getClientIp(req) {
  const forwardedFor = String(req.headers["x-forwarded-for"] || "");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return req.ip || "";
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function hasTooManyUrls(value) {
  const matches = String(value || "").match(/https?:\/\/|www\./gi);
  return (matches || []).length > 1;
}

function validatePayload(body) {
  const errors = [];
  const payload = {
    nombre: sanitizeText(body.nombre, 120),
    email: sanitizeText(body.email, 120).toLowerCase(),
    telefono: sanitizeText(body.telefono, 20),
    empresa: sanitizeText(body.empresa, 120),
    asunto: sanitizeText(body.asunto, 120),
    mensaje: sanitizeText(body.mensaje, 2000),
    pageUrl: sanitizeText(body.pageUrl, 500),
    pageTitle: sanitizeText(body.pageTitle, 200),
    submittedAt: sanitizeText(body.submittedAt, 64),
    formStartedAt: Number(body.formStartedAt || 0),
    jsEnabled: body.jsEnabled === true || body.jsEnabled === "true",
    honeyPot: sanitizeText(body._gotcha || body.honeyPot, 200),
    website: sanitizeText(body.website, 200),
    turnstileToken: sanitizeText(body.turnstileToken || body["cf-turnstile-response"], 4096)
  };

  if (payload.honeyPot || payload.website) {
    errors.push("spam");
  }

  if (payload.nombre.length < 3) {
    errors.push("nombre");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("email");
  }

  if (payload.telefono && !/^[0-9+()\-\s]{7,20}$/.test(payload.telefono)) {
    errors.push("telefono");
  }

  if (!payload.asunto) {
    errors.push("asunto");
  }

  if (payload.mensaje.length < 20) {
    errors.push("mensaje");
  }

  if (hasTooManyUrls(payload.mensaje)) {
    errors.push("mensaje_links");
  }

  if (!payload.turnstileToken) {
    errors.push("turnstile");
  }

  if (!payload.jsEnabled) {
    errors.push("js");
  }

  if (!Number.isFinite(payload.formStartedAt) || Date.now() - payload.formStartedAt < 4000) {
    errors.push("timing");
  }

  return {
    ok: errors.length === 0,
    payload
  };
}

async function verifyTurnstile(token, remoteIp) {
  if (!TURNSTILE_SECRET_KEY) {
    throw new Error("Missing TURNSTILE_SECRET_KEY");
  }

  const formData = new URLSearchParams();
  formData.set("secret", TURNSTILE_SECRET_KEY);
  formData.set("response", token);
  if (remoteIp) {
    formData.set("remoteip", remoteIp);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error("Turnstile verification failed");
  }

  return response.json();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailContent(payload, remoteIp) {
  const details = [
    ["Nombre", payload.nombre],
    ["Email", payload.email],
    ["Telefono", payload.telefono || "No indicado"],
    ["Empresa", payload.empresa || "No indicada"],
    ["Asunto", payload.asunto],
    ["Pagina", payload.pageUrl || "No indicada"],
    ["Titulo", payload.pageTitle || "No indicado"],
    ["Enviado", payload.submittedAt || new Date().toISOString()],
    ["IP", remoteIp || "No disponible"]
  ];

  const text = [
    "Nueva consulta desde avtsac.com",
    "",
    ...details.map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensaje:",
    payload.mensaje
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1f2f41">
      <h2 style="margin-bottom:16px">Nueva consulta desde avtsac.com</h2>
      <table style="border-collapse:collapse">
        <tbody>
          ${details
            .map(
              ([label, value]) =>
                `<tr><td style="padding:4px 12px 4px 0;font-weight:700">${escapeHtml(label)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="margin:20px 0 8px">Mensaje</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(payload.mensaje)}</p>
    </div>
  `;

  return { text, html };
}

app.get("/health", function (req, res) {
  res.json({
    ok: true,
    service: "avt-contact-api",
    environment: NODE_ENV
  });
});

app.post("/contact", async function (req, res) {
  if (!resend || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    res.status(500).json({
      ok: false,
      message: "Server is not configured"
    });
    return;
  }

  const validation = validatePayload(req.body || {});
  if (!validation.ok) {
    res.status(400).json({
      ok: false,
      message: "Datos invalidos"
    });
    return;
  }

  const remoteIp = getClientIp(req);

  try {
    const turnstile = await verifyTurnstile(validation.payload.turnstileToken, remoteIp);

    if (!turnstile.success) {
      res.status(400).json({
        ok: false,
        message: "Turnstile no valido"
      });
      return;
    }

    if (TURNSTILE_EXPECTED_HOSTNAME && turnstile.hostname !== TURNSTILE_EXPECTED_HOSTNAME) {
      res.status(400).json({
        ok: false,
        message: "Hostname de Turnstile no valido"
      });
      return;
    }

    const emailContent = buildEmailContent(validation.payload, remoteIp);

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: validation.payload.email,
      subject: `[Web AVT] ${validation.payload.asunto} - ${validation.payload.nombre}`,
      text: emailContent.text,
      html: emailContent.html
    });

    res.status(200).json({
      ok: true,
      message: "Mensaje enviado"
    });
  } catch (error) {
    console.error("contact_error", error);
    res.status(500).json({
      ok: false,
      message: "No se pudo procesar el mensaje"
    });
  }
});

app.use(function (error, req, res, next) {
  if (error && error.message === "Origin not allowed") {
    res.status(403).json({
      ok: false,
      message: "Origin not allowed"
    });
    return;
  }

  console.error("unhandled_error", error);
  res.status(500).json({
    ok: false,
    message: "Internal server error"
  });
});

app.listen(PORT, function () {
  console.log(`AVT contact API listening on port ${PORT}`);
});
