import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { projects } from '@/lib/projects-data'

export const metadata = {
  title: 'Proyectos | AVT Servicios Generales',
  description:
    'Galería de proyectos realizados en saneamiento e infraestructura. Conoce nuestros trabajos más destacados.',
}

export default function Proyectos() {
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
      <section className="min-h-80 flex items-center justify-center text-white relative overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/proyectos.jpg')",
          }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
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
            {projects.map((project) => (
              <div
                key={project.id}
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

                  <div className="h-72 rounded-lg overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
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
      <WhatsAppButton />
    </main>
  )
}
