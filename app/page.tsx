'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Link from 'next/link'
import { projects as allProjects } from '@/lib/projects-data'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
    '/images/hero/home-1.jpg',
    '/images/hero/home-2.jpg',
    '/images/hero/home-3.jpg',
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  const services = [
    {
      title: 'Expedientes Técnicos',
      description:
        'Elaboración de expedientes técnicos completos y profesionales para proyectos de saneamiento e infraestructura.',
      number: '01',
    },
    {
      title: 'Asesoramiento SEDAPAL',
      description:
        'Asesoramiento especializado en trámites y requisitos ante SEDAPAL para proyectos de agua potable y alcantarillado.',
      number: '02',
    },
    {
      title: 'Trampas de Grasas',
      description:
        'Diseño, instalación y mantenimiento de trampas de grasas para establecimientos comerciales y restaurantes.',
      number: '03',
    },
    {
      title: 'Obras de Saneamiento',
      description:
        'Ejecución de obras completas de saneamiento con supervisión técnica y cumplimiento de normas.',
      number: '04',
    },
    {
      title: 'Consultoría Técnica',
      description:
        'Consultoría en proyectos de agua potable, alcantarillado y sistemas de saneamiento en general.',
      number: '05',
    },
    {
      title: 'Estudios de Factibilidad',
      description:
        'Realización de estudios técnicos y de factibilidad para proyectos de infraestructura sanitaria.',
      number: '06',
    },
  ]

  // Mostrar solo los primeros 3 proyectos en la página de inicio
  const featuredProjects = allProjects.slice(0, 3)

  const zones = [
    {
      title: 'Zona Centro',
      districts: 'Lima, Rímac, Cercado, La Victoria, Breña',
    },
    {
      title: 'Zona Sur',
      districts: 'Chorrillos, Barranco, Miraflores, San Isidro, Surco',
    },
    {
      title: 'Zona Este',
      districts: 'San Juan de Lurigancho, Ate, La Molina, Chaclacayo',
    },
    {
      title: 'Zona Norte',
      districts: 'Comas, Independencia, Los Olivos, San Martín de Porres',
    },
  ]

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20">
        {/* Carousel Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center hero-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Especialistas en Saneamiento e Infraestructura
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Más de 10 años de experiencia elaborando expedientes técnicos y ejecutando proyectos de saneamiento en Lima
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl"
              style={{
                backgroundColor: '#e53e3e',
                transform: 'translateY(0)',
              }}
            >
              Solicitar Cotización
            </Link>
            <Link
              href="/sobre-nosotros"
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white hover:bg-opacity-20 border-2 border-white"
            >
              Conocer Más
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: currentSlide === index ? '#e53e3e' : 'rgba(255, 255, 255, 0.5)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
              Nuestros Servicios
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Soluciones integrales en saneamiento e infraestructura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                style={{
                  borderTop: '4px solid #1a365d',
                }}
              >
                <div
                  className="text-5xl font-bold mb-4 text-center"
                  style={{ color: '#e53e3e' }}
                >
                  {service.number}
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-center"
                  style={{ color: '#1a365d' }}
                >
                  {service.title}
                </h3>
                <p className="text-center" style={{ color: '#4a5568' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg inline-block"
              style={{ backgroundColor: '#e53e3e' }}
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20" style={{ backgroundColor: '#e4f7f6' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
              Proyectos Destacados
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Nuestros trabajos más relevantes en saneamiento e infraestructura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                    style={{ backgroundColor: '#1a365d' }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: '#1a365d' }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ color: '#4a5568' }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/proyectos"
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg inline-block"
              style={{ backgroundColor: '#e53e3e' }}
            >
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20" style={{ backgroundColor: '#e8f4f8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
              Zonas de Servicio
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Cubrimos los principales distritos de Lima con servicios profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                style={{
                  borderLeft: '4px solid #1a365d',
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#1a365d' }}
                >
                  {zone.title}
                </h3>
                <p className="text-sm" style={{ color: '#4a5568' }}>
                  {zone.districts}
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
            Contacta con nuestro equipo de especialistas para una consulta sin compromiso
          </p>
          <Link
            href="/contacto"
            className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl inline-block"
            style={{ backgroundColor: '#e53e3e' }}
          >
            Contáctanos Ahora
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
