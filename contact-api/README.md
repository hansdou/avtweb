# AVT Contact API

Servicio Express listo para desplegar en Railway y recibir el formulario de contacto del sitio estático.

## Variables de entorno

Usa `contact-api/.env.example` como base y configura en Railway:

- `ALLOWED_ORIGINS`: dominios del frontend separados por comas.
- `RESEND_API_KEY`: API key de Resend.
- `CONTACT_TO_EMAIL`: correo que recibirá las consultas. Para este proyecto: `atiliovastor@gmail.com`.
- `CONTACT_FROM_EMAIL`: remitente verificado en Resend, por ejemplo `AVT Web <contacto@avtsac.com>`.
- `TURNSTILE_SECRET_KEY`: secret key de Cloudflare Turnstile.
- `TURNSTILE_EXPECTED_HOSTNAME`: hostname esperado del widget, por ejemplo `avtsac.com`.

`CONTACT_FROM_EMAIL` es la identidad de envío. No tiene que ser una bandeja real si Resend ya validó el dominio, pero sí debe usar un dominio autorizado en Resend.

## Railway

Configura el servicio apuntando a la carpeta `contact-api/` como root directory y expón el dominio `api.avtsac.com`.

## Endpoints

- `GET /health`
- `POST /contact`
