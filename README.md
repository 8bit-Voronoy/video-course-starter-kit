# Fotografía Luz Norte — proyecto Next.js

Landing page en español para un estudio de fotografía, construida con el
template estándar de Next.js (App Router) + Vercel.

## Stack
- **Next.js 15** (App Router, TypeScript)
- **React 19**
- Fuentes optimizadas con `next/font/google` (Fraunces + Inter)
- CSS plano en `app/globals.css` (sin librería de UI)

## Estructura
```
app/
  layout.tsx     → fuentes, metadata, <html>/<body>
  page.tsx       → toda la landing (componente cliente por el menú móvil)
  globals.css    → estilos y tokens de diseño
public/          → coloca aquí tus imágenes reales
vercel.json      → configuración opcional de Vercel
```

## Desarrollo local
```bash
npm install
npm run dev
```
Abre http://localhost:3000

## Build de producción
```bash
npm run build
npm start
```

## Desplegar en Vercel

**Opción A — con la CLI:**
```bash
npm i -g vercel
vercel
```
Vercel detecta Next.js automáticamente (no necesitas configurar build command
ni output directory). Usa `vercel --prod` para publicar a producción.

**Opción B — desde GitHub:**
1. Sube esta carpeta a un repositorio en GitHub.
2. En vercel.com → "Add New Project" → importa el repositorio.
3. Vercel detecta el framework "Next.js" automáticamente.
4. Deploy.

## Pendiente antes de publicar
- Reemplazar los bloques de color marcados como `role="img"` (`.hero-media`,
  `.story-media`, etc.) por imágenes reales — puedes usar el componente
  `next/image` apuntando a archivos en `/public`.
- Cambiar nombre de marca, correo, teléfono y precios por los datos reales.
- Revisar `app/layout.tsx` para ajustar el título y la descripción (SEO).
- Ejecutar `npm audit` periódicamente y mantener Next.js actualizado a la
  última versión parcheada de su línea estable.
