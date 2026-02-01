'use client'

import React from "react"
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Guardar referencia al formulario antes del async
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      empresa: formData.get('empresa'),
      asunto: formData.get('asunto'),
      mensaje: formData.get('mensaje'),
    }

    try {
      console.log('📤 Enviando formulario...')
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      console.log('📥 Respuesta recibida:', response.status, response.ok)
      const result = await response.json()
      console.log('📄 Datos de respuesta:', result)

      if (response.ok && result.success) {
        console.log('✅ Éxito - mostrando mensaje de confirmación')
        setSubmitStatus('success')
        form.reset() // Usar la referencia guardada
      } else {
        console.log('❌ Error - mostrando mensaje de error')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('❌ Error en catch:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '/icons/contact-location.png',
      title: 'Ubicación',
      details: 'Lima, Perú - Cobertura en toda la ciudad',
    },
    {
      icon: '/icons/contact-email.png',
      title: 'Email',
      details: 'atiliovastor@gmail.com',
    },
    {
      icon: '/icons/contact-phone.png',
      title: 'Teléfono',
      details: '+51 912-428-831',
    },
    {
      icon: '/icons/contact-schedule.png',
      title: 'Horario de Atención',
      details: 'Lun - Vie: 9:00 - 20:00 | Sáb: 9:00 - 13:00',
    },
  ]

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-80 flex items-center justify-center text-white relative overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/contacto.png')",
          }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center hero-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactanos</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Estamos aquí para responder tus preguntas y ayudarte con tu proyecto
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img 
                  src={info.icon || "/placeholder.svg"} 
                  alt={info.title}
                  className="w-16 h-16 mb-3 mx-auto object-contain"
                />
                <h3
                  className="font-bold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  {info.title}
                </h3>
                <p style={{ color: '#4a5568' }}>
                  {info.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#1a365d' }}
            >
              Envía tu Consulta
            </h2>
            <p className="text-lg" style={{ color: '#4a5568' }}>
              Completa el formulario y nuestro equipo te contactará en brevedad
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-green-800 font-semibold">✅ Mensaje enviado con éxito</p>
                <p className="text-green-600 text-sm mt-1">Te contactaremos pronto</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-800 font-semibold">❌ Error al enviar el mensaje</p>
                <p className="text-red-600 text-sm mt-1">Por favor, intenta nuevamente</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-semibold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: '#e2e8f0',
                    '--tw-ring-color': '#1a365d',
                  } as React.CSSProperties}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: '#e2e8f0',
                    '--tw-ring-color': '#1a365d',
                  } as React.CSSProperties}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="telefono"
                  className="block font-semibold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: '#e2e8f0',
                    '--tw-ring-color': '#1a365d',
                  } as React.CSSProperties}
                />
              </div>
              <div>
                <label
                  htmlFor="empresa"
                  className="block font-semibold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: '#e2e8f0',
                    '--tw-ring-color': '#1a365d',
                  } as React.CSSProperties}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="asunto"
                className="block font-semibold mb-2"
                style={{ color: '#1a365d' }}
              >
                Asunto *
              </label>
              <select
                id="asunto"
                name="asunto"
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: '#e2e8f0',
                  '--tw-ring-color': '#1a365d',
                } as React.CSSProperties}
              >
                <option value="">Selecciona un asunto</option>
                <option value="expedientes">Expedientes Técnicos</option>
                <option value="asesoramiento">Asesoramiento SEDAPAL</option>
                <option value="trampas">Trampas de Grasas</option>
                <option value="obras">Obras de Saneamiento</option>
                <option value="consulta">Consulta General</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="mensaje"
                className="block font-semibold mb-2"
                style={{ color: '#1a365d' }}
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                style={{
                  borderColor: '#e2e8f0',
                  '--tw-ring-color': '#1a365d',
                } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#e53e3e' }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
