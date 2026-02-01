import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, empresa, asunto, mensaje } = body

    console.log('📧 Procesando email:', { nombre, email, asunto })

    // Validar campos requeridos
    if (!nombre || !email || !asunto || !mensaje) {
      console.log('❌ Faltan campos requeridos')
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Enviar email con Resend
    console.log('📤 Enviando email via Resend...')
    const data = await resend.emails.send({
      from: 'AVT Web <onboarding@resend.dev>', // Dominio verificado de Resend
      to: ['lapiz.08.2004@gmail.com'],
      replyTo: email,
      subject: `Nueva consulta desde AVT Web - ${asunto}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1a365d 0%, #2d5a8f 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-left: 4px solid #e53e3e;
              border-right: 1px solid #e2e8f0;
              border-bottom: 1px solid #e2e8f0;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 3px solid #1a365d;
            }
            .field-label {
              font-weight: bold;
              color: #1a365d;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .field-value {
              color: #2d3748;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e2e8f0;
              white-space: pre-wrap;
              line-height: 1.8;
            }
            .footer {
              background: #2d3748;
              color: #cbd5e0;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              border-radius: 0 0 10px 10px;
            }
            .badge {
              display: inline-block;
              background: #e53e3e;
              color: white;
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 11px;
              font-weight: bold;
              text-transform: uppercase;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📧 Nueva Consulta</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">AVT Servicios Generales</p>
          </div>

          <div class="content">
            <div style="margin-top: 25px;">
              <div class="field">
                <div class="field-label">👤 Nombre Completo</div>
                <div class="field-value">${nombre}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #e53e3e; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📋 Asunto</div>
                <div class="field-value"><span class="badge" style="display: inline-block; background: #e53e3e; color: white; padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase;">${asunto}</span></div>
              </div>

              ${telefono ? `
              <div class="field">
                <div class="field-label">📱 Teléfono</div>
                <div class="field-value"><a href="tel:${telefono}" style="color: #e53e3e; text-decoration: none;">${telefono}</a></div>
              </div>
              ` : ''}

              ${empresa ? `
              <div class="field">
                <div class="field-label">🏢 Empresa</div>
                <div class="field-value">${empresa}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">💬 Mensaje</div>
                <div class="message-box">${mensaje}</div>
              </div>
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de AVT Web</p>
            <p style="margin: 5px 0 0 0; opacity: 0.7;">Responde directamente a este email para contactar al cliente</p>
          </div>
        </body>
        </html>
      `,
    })

    console.log('✅ Email enviado exitosamente. ID:', data.id)

    // Asegurar que devolvemos JSON válido
    return new NextResponse(
      JSON.stringify({ success: true, message: 'Email enviado correctamente' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error: any) {
    console.error('❌ Error enviando email:', error)
    console.error('Detalles del error:', error.message, error.stack)

    return NextResponse.json(
      { success: false, error: error.message || 'Error al enviar el email' },
      { status: 500 }
    )
  }
}
