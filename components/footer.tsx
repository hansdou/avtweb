import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-gray-900 text-white py-12"
      style={{ backgroundColor: '#1a365d' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AVT Servicios Generales</h3>
            <p className="text-gray-300 text-sm">
              Especialistas en saneamiento con más de 10 años de experiencia en Lima.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Expedientes Técnicos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Asesoramiento SEDAPAL
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Trampas de Grasas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Lima, Perú</li>
              <li>info@avtservicios.com</li>
              <li>+51 987 654 321</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} AVT Servicios Generales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
