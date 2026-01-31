'use client'

import { useState } from 'react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    icon: string
    description: string
    features: string[]
  } | null
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  if (!isOpen || !service) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-start justify-between p-8 border-b"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-4">
              <img 
                src={service.icon || "/placeholder.svg"} 
                alt={service.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2
                  className="text-3xl font-bold"
                  style={{ color: '#1a365d' }}
                >
                  {service.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: '#4a5568' }}
            >
              {service.description}
            </p>

            {/* Features Section */}
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: '#1a365d' }}
              >
                Características Principales
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: '#f7fafc' }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white font-bold mt-0.5"
                      style={{ backgroundColor: '#e53e3e' }}
                    >
                      ▪
                    </span>
                    <span
                      className="text-base"
                      style={{ color: '#2d3748' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div
              className="mt-8 p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: '#e8f4f8',
                borderColor: '#2c5282',
              }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: '#2c5282' }}
              >
                Información Importante:
              </p>
              <p
                className="text-sm"
                style={{ color: '#2d3748' }}
              >
                Todos nuestros servicios incluyen asesoramiento profesional, seguimiento personalizado y garantía de satisfacción del cliente.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            className="flex gap-4 p-8 border-t"
            style={{ borderColor: '#e2e8f0' }}
          >
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: '#f7fafc',
                color: '#1a365d',
                border: '2px solid #1a365d',
              }}
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                window.location.href = '/contacto'
              }}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#e53e3e' }}
            >
              Solicitar Servicio
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
