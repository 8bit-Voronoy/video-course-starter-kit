# Plantilla de landing (Next.js) — solo la parte funcional

Esqueleto de landing page con los patrones de interacción típicos de
páginas de producto/servicio (toggle, precios, carrusel, FAQ), sin
copy, imágenes ni branding de nadie — todo el contenido es de
relleno para que lo reemplaces por el tuyo.

## Componentes incluidos (`app/components/`)

| Componente | Qué hace |
|---|---|
| `Header.tsx` | Menú pegajoso con dropdown al pasar el mouse y menú móvil |
| `LogoMarquee.tsx` | Franja de logos que se desliza sola en loop |
| `StateToggle.tsx` | Switch de dos estados que cambia el contenido de un panel |
| `StatsGrid.tsx` | Tarjetas con números grandes |
| `HowItWorks.tsx` | Pasos numerados con imagen alternada izquierda/derecha |
| `PricingTiers.tsx` | Tarjetas de precio con acordeón de "detalles del precio" |
| `TestimonialCarousel.tsx` | Carrusel de testimonios con flechas y puntos |
| `FaqAccordion.tsx` | Acordeón de preguntas frecuentes |
| `Footer.tsx` | Footer con columnas configurables |

Todos reciben su contenido por props — no tienes que tocar la lógica
de ningún componente para cambiar textos, solo edita los arrays en
`app/page.tsx`.

## Cómo reemplazar tus assets

1. **Textos y precios** → todo está en los arrays de `app/page.tsx`
   (uno por sección: `stats`, `plans`, `testimonials`, `items` del FAQ, etc.).
2. **Imágenes** → los bloques marcados como `role="img"` (`.step-media`,
   por ejemplo) son placeholders de color. Ponlas en `/public` y
   cámbialos por `<Image src="/tu-foto.jpg" fill alt="..." />` de
   `next/image`.
3. **Colores** → todos los tokens están al principio de
   `app/globals.css` (`--bg`, `--accent`, `--surface`, etc.). Cambia
   esos valores y se propagan a todo el sitio.
4. **Nombre de marca** → aparece en `Header.tsx` y `Footer.tsx` como
   `"Tu Marca"`.
5. **Fuentes** → en `app/layout.tsx` se cargan `Sora` (títulos) e
   `Inter`... digo `Manrope` (texto). Cámbialas por las que quieras de
   [Google Fonts](https://fonts.google.com), mismo patrón.

## Desarrollo local
```bash
npm install
npm run dev
```

## Desplegar en Vercel
```bash
npm i -g vercel
vercel --prod
```
o impórtalo desde GitHub en vercel.com — Vercel detecta Next.js
automáticamente, sin configuración extra.
