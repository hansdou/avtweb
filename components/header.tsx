'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* 
            PARA AGREGAR TU LOGO:
            1. Guarda tu logo en /public/logo/logo.png
            2. Descomenta el <img> de abajo y comenta el <div>
            3. O mantén el <div> si prefieres el logo de texto
          */}
          {/* <img src="/logo/logo.png" alt="AVT Logo" className="h-10 w-auto" /> */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: '#1a365d' }}
          >
            AVT
          </div>
          <span className="font-bold text-lg" style={{ color: '#1a365d' }}>
            Servicios Generales
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-medium transition-colors hover:text-[#2c5282]"
            style={{ color: '#1a365d' }}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="font-medium transition-colors hover:text-[#2c5282]"
            style={{ color: '#1a365d' }}
          >
            Servicios
          </Link>
          <Link
            href="/proyectos"
            className="font-medium transition-colors hover:text-[#2c5282]"
            style={{ color: '#1a365d' }}
          >
            Proyectos
          </Link>
          <Link
            href="/sobre-nosotros"
            className="font-medium transition-colors hover:text-[#2c5282]"
            style={{ color: '#1a365d' }}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
            style={{ backgroundColor: '#e53e3e' }}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  )
}
