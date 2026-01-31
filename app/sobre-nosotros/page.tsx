import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Sobre Nosotros | AVT Servicios Generales',
  description:
    'Conoce quiénes somos, nuestra misión, visión y experiencia en servicios de saneamiento e infraestructura.',
}

export default function SobreNosotros() {
  const values = [
    {
      title: 'Excelencia',
      description:
        'Comprometidos con la más alta calidad en cada proyecto que realizamos',
      icon: '/icons/value-excellence.png',
    },
    {
      title: 'Integridad',
      description:
        'Actuamos con transparencia, honestidad y responsabilidad profesional',
      icon: '/icons/value-integrity.png',
    },
    {
      title: 'Experiencia',
      description:
        'Más de 15 años de trayectoria en proyectos de saneamiento e infraestructura',
      icon: '/icons/value-experience.png',
    },
    {
      title: 'Compromiso',
      description:
        'Dedicados al cumplimiento de cronogramas y satisfacción del cliente',
      icon: '/icons/value-commitment.png',
    },
    {
      title: 'Innovación',
      description:
        'Utilizamos las últimas tecnologías y metodologías en nuestros proyectos',
      icon: '/icons/value-innovation.png',
    },
    {
      title: 'Sostenibilidad',
      description:
        'Protegemos el medio ambiente con soluciones sustentables y responsables',
      icon: '/icons/value-sustainability.png',
    },
  ]

  const team = [
    {
      name: 'Ing. Carlos García López',
      role: 'Gerente General y Consultor Principal',
      experience:
        'Ingeniero Civil con 20 años en proyectos de saneamiento e infraestructura',
    },
    {
      name: 'Ing. María Rodríguez Pérez',
      role: 'Jefa de Proyectos',
      experience:
        'Especialista en expedientes técnicos y coordinación de obras con SEDAPAL',
    },
    {
      name: 'Ing. Jorge Mendoza Ruiz',
      role: 'Supervisor de Obras',
      experience:
        'Con más de 15 años en supervisión técnica de proyectos de gran envergadura',
    },
    {
      name: 'Ing. Andrea López Flores',
      role: 'Especialista en Trampas de Grasas',
      experience:
        'Experta en diseño, instalación y mantenimiento de sistemas de saneamiento',
    },
  ]

  const certifications = [
    'Certificado ISO 9001:2015',
    'Colegiado en el Colegio de Ingenieros del Perú',
    'Autorizado por SEDAPAL',
    'Registro de Empresas Contratistas',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Especialistas en saneamiento e infraestructura con más de 15 años de experiencia
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: '#1a365d' }}
              >
                Quiénes Somos
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: '#4a5568' }}
              >
                AVT Servicios Generales es una empresa especializada en la elaboración de expedientes técnicos, asesoramiento SEDAPAL, diseño e instalación de trampas de grasas, y ejecución de obras de saneamiento.
              </p>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: '#4a5568' }}
              >
                Contamos con un equipo profesional de ingenieros civiles con experiencia probada en proyectos de infraestructura sanitaria en Lima. Nuestro compromiso es entregar soluciones de calidad, cumpliendo estrictamente con cronogramas y normativas vigentes.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#4a5568' }}
              >
                Desde nuestra fundación, hemos trabajado con municipalidades, empresas privadas, instituciones educativas y viviendas particulares, ganándonos la confianza de cientos de clientes satisfechos.
              </p>
            </div>
            <div
              className="h-80 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#e8f4f8' }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <p style={{ color: '#718096' }}>Nuestras Oficinas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20"
        style={{ backgroundColor: '#e4f7f6' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#1a365d' }}
              >
                Nuestra Misión
              </h3>
              <p style={{ color: '#4a5568' }} className="leading-relaxed">
                Proporcionar servicios especializados en saneamiento e infraestructura sanitaria, con soluciones integrales y profesionales que cumplan con las más altas normas técnicas y ambientales, generando valor a nuestros clientes y contribuyendo al desarrollo de Lima.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#1a365d' }}
              >
                Nuestra Visión
              </h3>
              <p style={{ color: '#4a5568' }} className="leading-relaxed">
                Ser la empresa líder en servicios de saneamiento e infraestructura en Lima, reconocida por nuestra excelencia, confiabilidad y compromiso con la satisfacción del cliente, siendo un referente en calidad y profesionalismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#1a365d' }}
            >
              Nuestros Valores
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Principios que guían nuestro trabajo y relaciones con clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
                style={{
                  borderTop: '4px solid #1a365d',
                }}
              >
                <img 
                  src={value.icon || "/placeholder.svg"} 
                  alt={value.title}
                  className="w-16 h-16 mb-4 mx-auto object-contain"
                />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#1a365d' }}
                >
                  {value.title}
                </h3>
                <p style={{ color: '#4a5568' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#1a365d' }}
            >
              Nuestro Equipo
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Profesionales con amplia experiencia en infraestructura y saneamiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div
                  className="h-48 flex items-center justify-center text-gray-400"
                  style={{ backgroundColor: '#f7fafc' }}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">👤</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: '#1a365d' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: '#e53e3e' }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: '#4a5568' }}
                  >
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-20"
        style={{ backgroundColor: '#e8f4f8' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#1a365d' }}
            >
              Certificaciones y Autorizaciones
            </h2>
            <p className="text-xl" style={{ color: '#4a5568' }}>
              Contamos con las certificaciones necesarias para garantizar la calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                  style={{ backgroundColor: '#e53e3e' }}
                >
                  ✓
                </div>
                <p style={{ color: '#1a365d' }} className="font-semibold">
                  {cert}
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
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos para discutir tu próximo proyecto
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
    </main>
  )
}
