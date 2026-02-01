'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import ServiceModal from '@/components/service-modal'
import Link from 'next/link'

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }

    if (selectedService !== null) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedService])
  const detailedServices = [
    {
      title: 'Expedientes Técnicos',
      icon: '/images/servicios/expedientes.jpg',
      description:
        'Elaboración profesional de expedientes técnicos completos para proyectos de saneamiento e infraestructura',
      features: [
        'Estudios preliminares y factibilidad',
        'Diseños de ingeniería detallados',
        'Especificaciones técnicas completas',
        'Presupuestos y cronogramas',
        'Documentación para trámites administrativos',
      ],
    },
    {
      title: 'Asesoramiento SEDAPAL',
      icon: '/images/servicios/sedapal.png',
      description:
        'Especialistas en trámites, requisitos y procedimientos ante SEDAPAL',
      features: [
        'Asesoramiento integral en procedimientos',
        'Preparación de documentación requerida',
        'Seguimiento de proyectos ante SEDAPAL',
        'Resolución de inconformidades',
        'Coordinación con entidades reguladoras',
      ],
    },
    {
      title: 'Trampas de Grasas',
      icon: '/images/servicios/trampas-grasas.jpg',
      description:
        'Diseño, instalación, mantenimiento y reparación de sistemas de trampas de grasas',
      features: [
        'Diseño personalizado según necesidades',
        'Instalación profesional y segura',
        'Mantenimiento preventivo y correctivo',
        'Servicios de limpieza y desazolve',
        'Certificados de cumplimiento ambiental',
      ],
    },
    {
      title: 'Obras de Saneamiento',
      icon: '/images/servicios/obras-saneamiento.jpg',
      description:
        'Ejecución integral de proyectos de agua potable, alcantarillado y saneamiento',
      features: [
        'Construcción de redes de distribución',
        'Instalación de sistemas de alcantarillado',
        'Plantas de tratamiento de agua',
        'Supervisión técnica permanente',
        'Cumplimiento de normas y estándares',
      ],
    },
    {
      title: 'Consultoría Técnica',
      icon: '/images/servicios/consultoria.jpg',
      description:
        'Consultoría especializada en proyectos de infraestructura sanitaria',
      features: [
        'Auditorías técnicas de sistemas existentes',
        'Recomendaciones de mejora',
        'Asesoramiento en optimización',
        'Diagnóstico de problemas',
        'Propuestas de soluciones integrales',
      ],
    },
    {
      title: 'Estudios de Factibilidad',
      icon: '/images/servicios/factibilidad.jpg',
      description:
        'Realización de estudios técnicos y de viabilidad para proyectos sanitarios',
      features: [
        'Análisis de prefactibilidad',
        'Estudios de factibilidad técnica',
        'Evaluación económica y financiera',
        'Impacto ambiental',
        'Recomendaciones finales',
      ],
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description:
        'Realizamos un análisis exhaustivo de tus necesidades y situación actual',
    },
    {
      number: '02',
      title: 'Propuesta',
      description:
        'Elaboramos una propuesta personalizada con soluciones y presupuesto',
    },
    {
      number: '03',
      title: 'Ejecución',
      description: 'Implementamos la solución con supervisión técnica permanente',
    },
    {
      number: '04',
      title: 'Seguimiento',
      description:
        'Realizamos seguimiento post-proyecto y mantenimiento preventivo',
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
            backgroundImage: "url('/images/hero/servicios.jpg')",
          }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center hero-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Soluciones integrales en saneamiento e infraestructura
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                style={{
                  borderTop: '5px solid #1a365d',
                }}
              >
                <div className="w-full h-40 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#1a365d' }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-6"
                  style={{ color: '#4a5568' }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: '#2d3748' }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold"
                        style={{ backgroundColor: '#e53e3e' }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full px-4 py-2 rounded-lg font-semibold transition-all"
                  style={{
                    backgroundColor: '#1a365d',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2c5282'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a365d'
                  }}
                >
                  Ver Detalles →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService !== null ? detailedServices[selectedService] : null}
      />

      {/* Process Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#e8f4f8' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
              Nuestro Proceso
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Metodología probada para garantizar resultados de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4"
                  style={{ backgroundColor: '#1a365d' }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#4a5568' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: '#1a365d' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            ¿Necesitas Nuestros Servicios?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Solicita una cotización personalizada sin compromiso
          </p>
          <Link
            href="/contacto"
            className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl inline-block"
            style={{ backgroundColor: '#e53e3e' }}
          >
            Contactar Ahora
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
