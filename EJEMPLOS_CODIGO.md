# Ejemplos de Código: Cómo Agregar Imágenes

## 1️⃣ AGREGAR IMAGEN AL LOGO DEL HEADER

### Ubicación: `components/header.tsx` - Línea ~20

**CÓDIGO ACTUAL:**
```jsx
<div className="text-2xl font-bold" style={{ color: '#1a365d' }}>
  AVT Servicios
</div>
```

**CÓDIGO MODIFICADO:**
```jsx
<img 
  src="/logo/logo.png" 
  alt="AVT Servicios Generales" 
  className="h-10 w-auto object-contain"
/>
```

**Pasos:**
1. Guarda tu logo en `/public/logo/logo.png`
2. Copia el código de arriba
3. Reemplaza el `<div>` con el `<img>`
4. Listo! ✅

---

## 2️⃣ AGREGAR IMÁGENES A LOS SERVICIOS

### Ubicación: `app/servicios/page.tsx` - Línea ~80

**PASO 1: Modifica el array de servicios**

```jsx
const services = [
  {
    // AGREGA ESTA LÍNEA:
    image: '/servicios/expedientes.jpg',
    
    title: 'Expedientes Técnicos',
    description: 'Elaboración profesional de expedientes técnicos...',
    features: ['Diseño CAD', 'Presupuestos', 'Cronogramas'],
  },
  {
    image: '/servicios/sedapal.jpg',
    title: 'Asesoramiento SEDAPAL',
    description: 'Gestión completa ante las autoridades...',
    features: ['Trámites', 'Aprobaciones', 'Permisos'],
  },
  {
    image: '/servicios/trampas-grasas.jpg',
    title: 'Trampas de Grasas',
    description: 'Diseño e instalación de sistemas...',
    features: ['Instalación', 'Mantenimiento', 'Certificados'],
  },
  {
    image: '/servicios/saneamiento.jpg',
    title: 'Obras de Saneamiento',
    description: 'Ejecución completa de proyectos...',
    features: ['Supervisión', 'Calidad', 'Garantía'],
  },
  {
    image: '/servicios/diagnostico.jpg',
    title: 'Diagnóstico Técnico',
    description: 'Evaluación de sistemas existentes...',
    features: ['Inspección', 'Informe', 'Recomendaciones'],
  },
  {
    image: '/servicios/consultoria.jpg',
    title: 'Consultoría Especializada',
    description: 'Asesoramiento en proyectos complejos...',
    features: ['Expertise', 'Soluciones', 'Apoyo'],
  },
]
```

**PASO 2: Modifica el JSX donde muestra las tarjetas**

Busca donde dice `{service.icon}` y reemplaza:

```jsx
// BUSCA ESTO:
<div className="text-5xl mb-4">{service.icon}</div>

// POR ESTO:
<img 
  src={service.image} 
  alt={service.title}
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
```

**RESULTADO:**
Las tarjetas de servicios ahora mostrarán imágenes reales en lugar de emojis.

---

## 3️⃣ AGREGAR IMÁGENES A LOS PROYECTOS

### Ubicación: `app/proyectos/page.tsx` - Línea ~230

**CÓDIGO ACTUAL (YA CONFIGURADO CON UNSPLASH):**
```jsx
<img
  src={`https://images.unsplash.com/photo-${...}`}
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

**PARA USAR TUS IMÁGENES:**

Reemplaza con:
```jsx
<img
  src={`/proyectos/proyecto-${index + 1}.jpg`}
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

**Estructura de archivos necesaria:**
```
/public
  /proyectos
    - proyecto-1.jpg  (Proyecto Integral de Saneamiento)
    - proyecto-2.jpg  (Centro Comercial - Trampas)
    - proyecto-3.jpg  (Hospital Municipal)
    - proyecto-4.jpg  (Complejo Industrial)
    - proyecto-5.jpg  (Condominio Miraflores)
    - proyecto-6.jpg  (Restaurante Barranco)
```

---

## 4️⃣ AGREGAR FOTOS AL EQUIPO

### Ubicación: `app/sobre-nosotros/page.tsx` - Línea ~220

**PASO 1: Modifica el array del equipo**

```jsx
const team = [
  {
    // AGREGA ESTA LÍNEA:
    image: '/equipo/engineer-1.jpg',
    
    name: 'Ing. Carlos García',
    role: 'Director General & Especialista en Saneamiento',
    bio: 'Con más de 15 años de experiencia...',
  },
  {
    image: '/equipo/engineer-2.jpg',
    name: 'Ing. María López',
    role: 'Jefe de Proyectos',
    bio: 'Especialista en expedientes técnicos...',
  },
  {
    image: '/equipo/engineer-3.jpg',
    name: 'Ing. Roberto Martínez',
    role: 'Especialista en SEDAPAL',
    bio: 'Gestor experto en trámites...',
  },
  {
    image: '/equipo/engineer-4.jpg',
    name: 'Ing. Patricia Sánchez',
    role: 'Supervisora de Obras',
    bio: 'Supervisora técnica con experiencia...',
  },
]
```

**PASO 2: Reemplaza el emoji por la imagen**

```jsx
// BUSCA:
<div className="text-6xl mb-4">{member.icon}</div>

// POR:
<img
  src={member.image}
  alt={member.name}
  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
/>
```

---

## 5️⃣ AGREGAR LOGO EN EL FOOTER

### Ubicación: `components/footer.tsx` - Línea ~15

**OPCIÓN 1: Texto actual (mantenerlo)**
```jsx
<h3 className="text-xl font-bold mb-4">AVT Servicios Generales</h3>
```

**OPCIÓN 2: Agregar logo blanco**
```jsx
<img 
  src="/logo/logo-white.png" 
  alt="AVT Logo"
  className="h-8 w-auto mb-4"
/>
```

**OPCIÓN 3: Combinar logo + texto**
```jsx
<div className="flex items-center gap-2 mb-4">
  <img 
    src="/logo/logo-white.png" 
    alt="AVT Logo"
    className="h-8 w-auto"
  />
  <h3 className="text-xl font-bold">AVT Servicios</h3>
</div>
```

---

## 6️⃣ AGREGAR MAPA EN CONTACTO

### Ubicación: `app/contacto/page.tsx` - Línea ~220

**OPCIÓN A: Imagen estática**
```jsx
<div className="rounded-lg overflow-hidden shadow-lg h-96">
  <img 
    src="/hero/mapa-lima.png" 
    alt="Ubicación de AVT Servicios"
    className="w-full h-full object-cover"
  />
</div>
```

**OPCIÓN B: Google Maps (recomendado)**
```jsx
<div className="rounded-lg overflow-hidden shadow-lg h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8554517758766!2d-77.04!3d-12.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAVT+Servicios+Generales!2s-77.04,-12.05!5e0!3m2!1ses!2spe!4v1234567890"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
```

---

## 7️⃣ AGREGAR BANNER HERO PERSONALIZADO

### Ubicación: `app/page.tsx` - Línea ~95

**ACTUAL (fondo degradado):**
```jsx
<section
  className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20"
  style={{
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
  }}
>
```

**CON IMAGEN DE FONDO:**
```jsx
<section
  className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20"
  style={{
    background: 'url(/hero/hero-main.jpg) center/cover',
  }}
>
  {/* Capa oscura semi-transparente para mejor legibilidad */}
  <div className="absolute inset-0 bg-black/40" />
  
  {/* El contenido va aquí con z-10 para que esté encima */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center hero-fade-in">
    {/* ... contenido ... */}
  </div>
</section>
```

---

## 8️⃣ AGREGAR CERTIFICACIONES

### Ubicación: `app/sobre-nosotros/page.tsx` - Línea ~280

**Array de certificaciones:**
```jsx
const certifications = [
  {
    name: 'ISO 9001:2015',
    image: '/certificaciones/iso-9001.png',
  },
  {
    name: 'SEDAPAL Registrado',
    image: '/certificaciones/sedapal-registro.png',
  },
  {
    name: 'Cámara de Comercio',
    image: '/certificaciones/camara-comercio.png',
  },
  {
    name: 'OSCE Calificado',
    image: '/certificaciones/osce.png',
  },
]
```

**Mostrar en el HTML:**
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {certifications.map((cert, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={cert.image}
        alt={cert.name}
        className="h-20 object-contain mb-4"
      />
      <p className="text-sm text-center" style={{ color: '#4a5568' }}>
        {cert.name}
      </p>
    </div>
  ))}
</div>
```

---

## 📋 CHECKLIST RÁPIDO

Para agregar cada imagen, sigue estos 3 pasos:

1. **Guarda la imagen** en `/public/[carpeta]/`
2. **Busca el código** en el archivo correspondiente
3. **Reemplaza** el emoji/placeholder con:
   ```jsx
   <img src="/[carpeta]/[nombre].jpg" alt="descripción" className="[clases-tailwind]" />
   ```

---

## 🎨 CLASES TAILWIND ÚTILES PARA IMÁGENES

```jsx
// Hacer la imagen cuadrada y circular
className="w-24 h-24 rounded-full object-cover"

// Imagen responsive ancho completo
className="w-full h-auto"

// Imagen con aspecto fijo
className="w-full h-48 object-cover"

// Imagen con sombra
className="w-full h-auto shadow-lg rounded-lg"

// Imagen con borde
className="w-full h-auto border-4 border-blue-500 rounded-lg"

// Imagen con efecto hover
className="w-full h-auto hover:opacity-80 transition-opacity"

// Imagen dentro de grid
className="col-span-1 w-full h-48 object-cover rounded-lg"
```

---

## 🚀 PASOS PARA SUBIR IMÁGENES EN v0

1. Haz clic en "+" junto a "public" en la estructura del proyecto
2. Crea carpetas: `logo`, `hero`, `servicios`, `proyectos`, `equipo`, `certificaciones`
3. Sube las imágenes en cada carpeta
4. Copia las rutas (ej: `/servicios/expedientes.jpg`)
5. Pega en el código donde corresponda

¡Listo! Las imágenes aparecerán automáticamente.

---

**¿Preguntas? Consulta la GUIA_IMAGENES.md para más detalles.**
