import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Proyectos | AVT Servicios Generales',
  description:
    'Galería de proyectos realizados en saneamiento e infraestructura. Conoce nuestros trabajos más destacados.',
}

export default function Proyectos() {
  const projects = [
    {
      title: 'Proyecto Integral de Saneamiento - Urbanización Residencial',
      category: 'Infraestructura',
      year: '2023',
      location: 'Distrito de La Molina',
      description:
        'Implementación del sistema completo de agua potable y alcantarillado para urbanización de 200+ viviendas. Incluye diseño de redes, instalación de tuberías principales y conexiones domiciliarias.',
      highlights: [
        'Diseño integral de redes de agua y desagüe',
        '15 km de tuberías instaladas',
        '200+ conexiones domiciliarias',
        'Sistema de tratamiento de agua',
        'Cumplimiento total de normativas SEDAPAL',
      ],
    },
    {
      title: 'Centro Comercial - Sistema de Trampas de Grasas',
      category: 'Comercial',
      year: '2023',
      location: 'San Isidro',
      description:
        'Diseño e instalación de sistema integral de trampas de grasas para centro comercial con 50+ establecimientos gastronómicos. Sistema con capacidad de 5000 L/día.',
      highlights: [
        '8 trampas de grasas de última tecnología',
        'Sistema de monitoreo automático',
        'Mantenimiento programado mensual',
        'Certificados ambientales obtenidos',
        'Cero multas por incumplimiento',
      ],
    },
    {
      title: 'Hospital Municipal - Proyecto de Saneamiento',
      category: 'Sanitario',
      year: '2023',
      location: 'Cono Sur',
      description:
        'Modernización completa del sistema de saneamiento de hospital con 150 camas. Incluyó diseño e instalación de plant de tratamiento de aguas residuales hospitalarias.',
      highlights: [
        'Planta de tratamiento de 50 m³/día',
        'Sistema de desinfección UV',
        'Cumplimiento de normas DE.S. 003-97',
        'Supervisión técnica 24/7',
        'Capacitación al personal hospitalario',
      ],
    },
    {
      title: 'Complejo Industrial - Expediente Técnico Completo',
      category: 'Industrial',
      year: '2022',
      location: 'Cono Norte',
      description:
        'Elaboración de expediente técnico completo para proyecto de saneamiento en complejo industrial con áreas de producción, oficinas y almacenes.',
      highlights: [
        'Estudios de factibilidad realizados',
        'Diseños CAD en 3D',
        'Presupuesto detallado',
        'Cronograma de ejecución',
        'Aprobación de SEDAPAL en primer intento',
      ],
    },
    {
      title: 'Condominio de Viviendas - Remodelación Sanitaria',
      category: 'Residencial',
      year: '2022',
      location: 'Miraflores',
      description:
        'Remodelación integral del sistema de saneamiento de condominio de 80 departamentos. Incluye reemplazo de tuberías antiguas y modernización de instalaciones.',
      highlights: [
        'Evaluación sin dañar estructura',
        'Instalación de tuberías PVC de calidad',
        'Pruebas de hermeticidad',
        'Garantía extendida de 5 años',
        'Mínimas molestias a residentes',
      ],
    },
    {
      title: 'Restaurante - Trampa de Grasa y Aire',
      category: 'Comercial',
      year: '2022',
      location: 'Barranco',
      description:
        'Instalación de sistema de trampa de grasas y trampa de aire para restaurante de comida marina de alta gama con capacidad para 150 clientes.',
      highlights: [
        'Trampa de grasa de 2000 L',
        'Trampa de aire integrada',
        'Tratamiento de olores',
        'Cumplimiento de normas municipales',
        'Mantenimiento mensual incluido',
      ],
    },
  ]

  const stats = [
    { value: '200+', label: 'Proyectos Completados' },
    { value: '15+', label: 'Años de Experiencia' },
    { value: '500+', label: 'Clientes Satisfechos' },
    { value: '100%', label: 'Cumplimiento de Cronograma' },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Galería de trabajos realizados en infraestructura y saneamiento
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  {stat.value}
                </div>
                <p style={{ color: '#4a5568' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: '#1a365d' }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: '#e8f4f8',
                          color: '#1a365d',
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: '#1a365d' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm mb-4"
                      style={{ color: '#718096' }}
                    >
                      📍 {project.location}
                    </p>

                    <p
                      className="mb-6 leading-relaxed"
                      style={{ color: '#4a5568' }}
                    >
                      {project.description}
                    </p>

                    <div className="mb-0">
                      <h4
                        className="font-semibold mb-3"
                        style={{ color: '#1a365d' }}
                      >
                        Destacados del Proyecto:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: '#2d3748' }}
                          >
                            <span
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold mt-0.5"
                              style={{ backgroundColor: '#e53e3e' }}
                            >
                              ✓
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="h-72 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50"
                    style={{ backgroundColor: '#e8f4f8' }}
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? '1581092918056-a94e45d46c8e?w=500&q=80'
                          : index === 1
                            ? '1560264357-8d9766c4b5ee?w=500&q=80'
                            : index === 2
                              ? '1576091160550-2173dba999ef?w=500&q=80'
                              : index === 3
                                ? '1581092915962-8a917e38cc9c?w=500&q=80'
                                : index === 4
                                  ? '1581092163562-40f08663644d?w=500&q=80'
                                  : '1576091160699-112122207ee5?w=500&q=80'
                      }`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
            ¿Tienes un Proyecto Similar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo puede ayudarte a realizarlo con la misma calidad y profesionalismo
          </p>
          <a
            href="/contacto"
            className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-xl inline-block"
            style={{ backgroundColor: '#e53e3e' }}
          >
            Solicita una Consulta
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
