'use client'

import React from "react"

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    asunto: '',
    mensaje: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        asunto: '',
        mensaje: '',
      })
      setIsSubmitted(false)
    }, 3000)
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
      <section
        className="min-h-80 flex items-center justify-center text-white relative overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        }}
      >
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

          {isSubmitted && (
            <div
              className="mb-8 p-4 rounded-lg text-white text-center animate-pulse"
              style={{ backgroundColor: '#4CAF50' }}
            >
              ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
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
                  value={formData.nombre}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.telefono}
                  onChange={handleChange}
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
                  value={formData.empresa}
                  onChange={handleChange}
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
                value={formData.asunto}
                onChange={handleChange}
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
                value={formData.mensaje}
                onChange={handleChange}
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
              className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:shadow-xl"
              style={{ backgroundColor: '#e53e3e' }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#1a365d' }}
          >
            Ubicación
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <div
              className="w-full h-full flex items-center justify-center text-gray-400"
              style={{ backgroundColor: '#e8f4f8' }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">◉</div>
                <p>Mapa de ubicación (integración pendiente)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
