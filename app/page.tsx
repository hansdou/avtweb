import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Expedientes Técnicos',
      description:
        'Elaboración de expedientes técnicos completos y profesionales para proyectos de saneamiento e infraestructura.',
      icon: '/icons/expedientes.png',
    },
    {
      title: 'Asesoramiento SEDAPAL',
      description:
        'Asesoramiento especializado en trámites y requisitos ante SEDAPAL para proyectos de agua potable y alcantarillado.',
      icon: '/icons/sedapal.png',
    },
    {
      title: 'Trampas de Grasas',
      description:
        'Diseño, instalación y mantenimiento de trampas de grasas para establecimientos comerciales y restaurantes.',
      icon: '/icons/trampas-grasas.png',
    },
    {
      title: 'Obras de Saneamiento',
      description:
        'Ejecución de obras completas de saneamiento con supervisión técnica y cumplimiento de normas.',
      icon: '/icons/obras-saneamiento.png',
    },
    {
      title: 'Consultoría Técnica',
      description:
        'Consultoría en proyectos de agua potable, alcantarillado y sistemas de saneamiento en general.',
      icon: '/icons/consultoria.png',
    },
    {
      title: 'Estudios de Factibilidad',
      description:
        'Realización de estudios técnicos y de factibilidad para proyectos de infraestructura sanitaria.',
      icon: '/icons/factibilidad.png',
    },
  ]

  const projects = [
    {
      title: 'Proyecto Integral de Saneamiento - Distrito A',
      category: 'Infraestructura',
      description:
        'Implementación de sistema completo de agua potable y alcantarillado en urbanización residencial.',
    },
    {
      title: 'Centro Comercial - Sistema de Trampas de Grasas',
      category: 'Comercial',
      description:
        'Diseño e instalación de sistema de trampas de grasas para 50+ locales gastronómicos.',
    },
    {
      title: 'Hospital Municipal - Proyecto de Saneamiento',
      category: 'Sanitario',
      description:
        'Modernización del sistema de saneamiento de hospital con tratamiento de aguas residuales.',
    },
  ]

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

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-5" />

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
                <img 
                  src={service.icon || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-16 h-16 mb-4 mx-auto object-contain"
                />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#1a365d' }}
                >
                  {service.title}
                </h3>
                <p style={{ color: '#4a5568' }}>{service.description}</p>
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div
                  className="h-40 flex items-center justify-center text-gray-400 text-sm"
                  style={{ backgroundColor: '#f7fafc' }}
                >
                  Imagen del Proyecto
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
    </main>
  )
}
