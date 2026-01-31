# Guía Completa: Dónde Agregar Imágenes en el Sitio Web AVT

## Resumen Ejecutivo

Este documento te muestra exactamente dónde agregar imágenes en cada página del sitio. Las imágenes deben guardarse en la carpeta `/public` y referenciarse en el código.

---

## Estructura de Carpetas para Imágenes

```
/public
  ├── /logo
  │   ├── logo.png (o .svg/.jpg)
  │   └── logo-white.png (versión blanca para footer)
  ├── /hero
  │   ├── hero-main.jpg
  │   └── hero-pattern.svg
  ├── /servicios
  │   ├── expedientes.jpg
  │   ├── sedapal.jpg
  │   ├── trampas-grasas.jpg
  │   ├── saneamiento.jpg
  │   ├── diagnostico.jpg
  │   └── consultoria.jpg
  ├── /proyectos
  │   ├── proyecto-1.jpg
  │   ├── proyecto-2.jpg
  │   ├── proyecto-3.jpg
  │   ├── proyecto-4.jpg
  │   ├── proyecto-5.jpg
  │   └── proyecto-6.jpg
  ├── /equipo
  │   ├── engineer-1.jpg
  │   ├── engineer-2.jpg
  │   ├── engineer-3.jpg
  │   └── engineer-4.jpg
  └── /testimonios
      ├── cliente-1.jpg
      ├── cliente-2.jpg
      └── cliente-3.jpg
```

---

## 📄 PÁGINA DE INICIO (app/page.tsx)

### 1. **Hero Section - Banner Principal**
   - **Ubicación en código**: Línea ~97
   - **Tamaño recomendado**: 1920x1080px
   - **Formato**: JPG
   - **Cómo cambiar**:
   ```jsx
   // Opción 1: Imagen de fondo
   style={{
     background: 'url(/hero/hero-main.jpg) center/cover',
   }}
   
   // Opción 2: Imagen dentro del div
   <img src="/hero/hero-main.jpg" alt="AVT Servicios" className="absolute inset-0 w-full h-full object-cover opacity-20" />
   ```

### 2. **Servicios Destacados - Iconos**
   - **Ubicación en código**: Línea ~180
   - **Tamaño**: 80x80px
   - **Formato**: SVG o PNG
   - **Cómo cambiar** (busca `Service Cards`):
   ```jsx
   // Cambiar los iconos emoji por imágenes
   <div className="text-5xl mb-4">📋</div>
   
   // Por:
   <img src="/servicios/expedientes.jpg" alt="Expedientes" className="w-20 h-20 mb-4 rounded-lg object-cover" />
   ```

### 3. **Zonas de Cobertura - Mapa**
   - **Ubicación en código**: Línea ~260
   - **Tamaño recomendado**: 800x600px
   - **Formato**: PNG o SVG
   - **Cómo cambiar**:
   ```jsx
   <div className="rounded-lg overflow-hidden">
     <img src="/hero/mapa-lima.png" alt="Zonas de servicio" className="w-full h-auto" />
   </div>
   ```

---

## 🛠️ PÁGINA DE SERVICIOS (app/servicios/page.tsx)

### Servicios Cards - Imágenes Principales
   - **Ubicación en código**: Línea ~150 (en el grid de servicios)
   - **Tamaño**: 400x300px
   - **Formato**: JPG
   - **Cómo cambiar**:
   
   Busca en el array `services` y modifica cada objeto:
   
   ```jsx
   // ANTES (actual):
   {
     icon: '📋',
     title: 'Expedientes Técnicos',
     // ...
   }
   
   // DESPUÉS (con imagen):
   {
     image: '/servicios/expedientes.jpg',
     title: 'Expedientes Técnicos',
     // ...
   }
   
   // Y en el JSX, cambia:
   <div className="text-5xl mb-4">{service.icon}</div>
   
   // Por:
   <img 
     src={service.image} 
     alt={service.title} 
     className="w-full h-48 object-cover rounded-t-lg"
   />
   ```

---

## 🏗️ PÁGINA DE PROYECTOS (app/proyectos/page.tsx)

### Imágenes de Proyectos ✅ (YA CONFIGURADO)
   - **Ubicación en código**: Línea ~230
   - **Tamaño actual**: 400x300px
   - **Formato**: JPG
   - **Cómo reemplazar**:

   Actualmente usa imágenes de Unsplash. Para usar tus propias imágenes:

   ```jsx
   // ACTUAL (usando URLs externas):
   src={`https://images.unsplash.com/photo-${...}`}
   
   // CAMBIA POR (usando tus imágenes):
   src={`/proyectos/proyecto-${index + 1}.jpg`}
   ```

   **Pasos**:
   1. Guarda tus fotos en `/public/proyectos/`
   2. Nómbralas: `proyecto-1.jpg`, `proyecto-2.jpg`, etc.
   3. Reemplaza la URL en el código (línea ~230)

---

## 👥 PÁGINA SOBRE NOSOTROS (app/sobre-nosotros/page.tsx)

### 1. **Banner Hero**
   - **Ubicación**: Línea ~50
   - **Tamaño**: 1920x600px
   - **Cambiar igual que en inicio**

### 2. **Fotos del Equipo**
   - **Ubicación**: Línea ~220 (Team Cards)
   - **Tamaño**: 250x250px (preferiblemente cuadradas)
   - **Formato**: JPG
   - **Cómo cambiar**:
   
   Busca el array `team` y modifica:
   ```jsx
   // ANTES:
   {
     icon: '👨‍💼',
     name: 'Ing. Carlos García',
     // ...
   }
   
   // DESPUÉS:
   {
     image: '/equipo/engineer-1.jpg',
     name: 'Ing. Carlos García',
     // ...
   }
   
   // En el JSX:
   <img 
     src={member.image} 
     alt={member.name}
     className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
   />
   ```

### 3. **Certificaciones y Logos**
   - **Ubicación**: Línea ~280 (Certifications)
   - **Tamaño**: 150x100px
   - **Formato**: PNG (recomendado)
   - **Cómo cambiar**:
   ```jsx
   <img src="/certificaciones/iso-9001.png" alt="ISO 9001" className="h-16 object-contain" />
   ```

---

## 📧 PÁGINA DE CONTACTO (app/contacto/page.tsx)

### Mapa de Ubicación
   - **Ubicación en código**: Línea ~220
   - **Opciones**:
   
   **Opción A: Imagen estática**
   ```jsx
   <img src="/hero/mapa-lima.png" alt="Ubicación" className="w-full h-96 object-cover" />
   ```
   
   **Opción B: Google Maps embebido**
   ```jsx
   <iframe
     src="https://www.google.com/maps/embed?pb=..."
     width="100%"
     height="400"
     style={{ border: 0 }}
     allowFullScreen=""
     loading="lazy"
   ></iframe>
   ```

---

## 🔧 COMPONENTES REUTILIZABLES

### Header (components/header.tsx)
   - **Logo**: Línea ~20
   - **Tamaño**: 150x50px
   - **Cambiar**:
   ```jsx
   // ANTES:
   <div className="text-2xl font-bold">AVT</div>
   
   // DESPUÉS:
   <img src="/logo/logo.png" alt="AVT" className="h-12 w-auto" />
   ```

### Footer (components/footer.tsx)
   - **Logo blanco**: Línea ~15 (si lo quieres)
   - **Redes sociales**: Línea ~30
   - **Cambiar iconos por imágenes**:
   ```jsx
   <a href="#facebook" className="hover:text-gray-300">
     <img src="/social/facebook.svg" alt="Facebook" className="w-6 h-6" />
   </a>
   ```

---

## 📐 ESPECIFICACIONES DE IMÁGENES RECOMENDADAS

| Sección | Ancho | Alto | Formato | Peso Máx |
|---------|-------|------|---------|----------|
| Hero Banner | 1920px | 1080px | JPG | 300KB |
| Servicios Card | 400px | 300px | JPG | 100KB |
| Proyectos | 400px | 300px | JPG | 100KB |
| Team Member | 250px | 250px | JPG | 80KB |
| Logo | 150px | 50px | PNG/SVG | 30KB |
| Mapa | 800px | 600px | PNG/JPG | 150KB |
| Certificaciones | 150px | 100px | PNG | 50KB |

---

## 🎨 CÓMO SUBIR IMÁGENES

### Método 1: Directamente al proyecto (RECOMENDADO)

1. **Crea las carpetas** en `/public`:
   ```
   Haz clic en el + junto a "public" en la estructura de archivos
   Crea: logo, hero, servicios, proyectos, equipo
   ```

2. **Sube las imágenes**:
   - Usa el botón "Upload" en v0
   - O arrastra las imágenes a la carpeta

3. **Referencia en el código**:
   ```jsx
   <img src="/servicios/expedientes.jpg" alt="Expedientes" />
   ```

### Método 2: URLs externas

Si prefieres mantener las imágenes en línea:

```jsx
<img 
  src="https://tuservidor.com/imagenes/foto.jpg" 
  alt="Descripción"
  className="w-full h-auto"
/>
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Crear carpeta `/public` con subcarpetas para cada sección
- [ ] Preparar imágenes en tamaños correctos
- [ ] Subir logo (versión normal y blanca)
- [ ] Subir hero banner para inicio
- [ ] Subir 6 imágenes de servicios
- [ ] Subir 6 imágenes de proyectos
- [ ] Subir fotos del equipo
- [ ] Subir certificaciones/logos de partners
- [ ] Subir mapa de zonas de servicio
- [ ] Actualizar referencias en el código
- [ ] Revisar que todas las imágenes carguen correctamente

---

## 🚀 EJEMPLO PRÁCTICO COMPLETO

### Cambiar el logo en el Header

**Archivo**: `components/header.tsx`
**Línea actual**: ~20

```jsx
// ANTES:
<div className="text-2xl font-bold" style={{ color: '#1a365d' }}>
  AVT Servicios
</div>

// DESPUÉS:
<img 
  src="/logo/logo.png" 
  alt="AVT Servicios Generales" 
  className="h-10 w-auto"
/>
```

### Agregar imagen en Servicios

**Archivo**: `app/servicios/page.tsx`
**Búsca el array `services` y modifica**:

```jsx
const services = [
  {
    image: '/servicios/expedientes.jpg', // AGREGAR ESTA LÍNEA
    title: 'Expedientes Técnicos',
    // ... resto del objeto
  },
  // ...
]
```

Luego en el JSX, cambia:
```jsx
{/* ANTES */}
<div className="text-5xl mb-4">{service.icon}</div>

{/* DESPUÉS */}
<img 
  src={service.image} 
  alt={service.title}
  className="w-full h-48 object-cover rounded-lg"
/>
```

---

## 💡 TIPS Y MEJORES PRÁCTICAS

1. **Optimiza imágenes**: Usa herramientas como TinyPNG o ImageOptim
2. **Formato WebP**: Considera convertir a WebP para mejor compresión
3. **Alt text**: Siempre incluye descripción en `alt=""` para SEO
4. **Lazy loading**: Las imágenes se cargan automáticamente cuando entran en vista
5. **Responsive**: Las imágenes se adaptan a todos los dispositivos automáticamente
6. **Nombres descriptivos**: USA nombres claros como `proyecto-saneamiento-2023.jpg`

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Dónde cargo las imágenes?**
R: En la carpeta `/public` del proyecto. Crea subcarpetas por sección.

**P: ¿Qué formato usar?**
R: JPG para fotos, PNG para logos/iconos, SVG para vectores.

**P: ¿Puedo usar URLs externas?**
R: Sí, pero no es recomendable. Es mejor guardarlas localmente.

**P: ¿Cómo cambio el tamaño?**
R: Modifica los valores `width` y `height` en la clase `className`.

**P: ¿Las imágenes aparecen borrosas?**
R: Aumenta el tamaño de la imagen original o usa mejor resolución.

---

**¿Necesitas ayuda? Contáctanos para implementar las imágenes correctamente.**
