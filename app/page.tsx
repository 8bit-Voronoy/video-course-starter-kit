import Header from "./components/Header";
import LogoMarquee from "./components/LogoMarquee";
import StateToggle from "./components/StateToggle";
import StatsGrid from "./components/StatsGrid";
import PricingTiers from "./components/PricingTiers";
import TestimonialCarousel from "./components/TestimonialCarousel";
import HowItWorks from "./components/HowItWorks";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Reemplaza este texto</p>
            <h1>Un titular claro sobre lo que ofreces.</h1>
            <p className="hero-lede">
              Una línea de apoyo explicando el beneficio principal en una
              frase. Cámbiala por tu propuesta de valor real.
            </p>
            <div className="hero-actions">
              <a href="#precios" className="btn btn-primary">
                Empezar
              </a>
              <a href="#como-funciona" className="btn btn-outline">
                Ver cómo funciona
              </a>
            </div>
          </div>
        </section>

        <LogoMarquee
          logos={["Medio 1", "Medio 2", "Medio 3", "Medio 4", "Medio 5"]}
        />

        {/* ---------- TOGGLE INTERACTIVO ---------- */}
        <section className="section" id="como-funciona">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Cómo funciona</p>
              <h2>Explica tu producto en dos estados.</h2>
              <p>
                Ideal para mostrar un antes/después, dos modos de
                funcionamiento, o dos audiencias distintas.
              </p>
            </div>
            <StateToggle
              states={[
                {
                  key: "estado-a",
                  label: "Estado A",
                  title: "Cuando todo funciona normal",
                  description:
                    "Describe aquí el primer estado o escenario de tu producto o servicio.",
                },
                {
                  key: "estado-b",
                  label: "Estado B",
                  title: "Cuando algo cambia",
                  description:
                    "Describe aquí el segundo estado — por ejemplo, qué pasa en una emergencia o un caso especial.",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- ESTADÍSTICAS ---------- */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Por qué elegirnos</p>
              <h2>Los números que respaldan tu servicio.</h2>
            </div>
            <StatsGrid
              stats={[
                {
                  value: "00%",
                  title: "Primer dato clave",
                  description: "Explica qué representa este número.",
                },
                {
                  value: "00x",
                  title: "Segundo dato clave",
                  description: "Explica qué representa este número.",
                },
                {
                  value: "00+",
                  title: "Tercer dato clave",
                  description: "Explica qué representa este número.",
                },
                {
                  value: "24/7",
                  title: "Cuarto dato clave",
                  description: "Explica qué representa este número.",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- PASOS ---------- */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Paso a paso</p>
              <h2>Así de fácil empezar.</h2>
            </div>
            <HowItWorks
              steps={[
                {
                  number: "01",
                  title: "Primer paso",
                  description: "Explica la primera acción que hace el cliente.",
                  imageAlt: "Imagen del primer paso",
                },
                {
                  number: "02",
                  title: "Segundo paso",
                  description: "Explica qué haces tú una vez que el cliente actuó.",
                  imageAlt: "Imagen del segundo paso",
                },
                {
                  number: "03",
                  title: "Tercer paso",
                  description: "Explica el resultado final para el cliente.",
                  imageAlt: "Imagen del tercer paso",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- PRECIOS ---------- */}
        <section className="section section-alt" id="precios">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Precios</p>
              <h2>Elige el plan que va contigo.</h2>
            </div>
            <PricingTiers
              plans={[
                {
                  key: "plan-basico",
                  name: "Plan básico",
                  price: "$000",
                  priceNote: "/mes",
                  bullets: [
                    "Primer beneficio incluido",
                    "Segundo beneficio incluido",
                    "Soporte estándar",
                  ],
                  priceDetails: [
                    { label: "Instalación", value: "$000 único pago" },
                    { label: "Membresía", value: "$00/mes" },
                  ],
                  ctaLabel: "Elegir básico",
                  ctaHref: "#contacto",
                },
                {
                  key: "plan-completo",
                  name: "Plan completo",
                  price: "$000",
                  priceNote: "/mes",
                  featured: true,
                  badge: "Más elegido",
                  bullets: [
                    "Todo lo del plan básico",
                    "Beneficio adicional",
                    "Soporte prioritario",
                  ],
                  priceDetails: [
                    { label: "Instalación", value: "$000 único pago" },
                    { label: "Membresía", value: "$00/mes" },
                    { label: "Extra incluido", value: "Sí" },
                  ],
                  ctaLabel: "Elegir completo",
                  ctaHref: "#contacto",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- TESTIMONIOS ---------- */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Testimonios</p>
              <h2>Lo que dicen tus clientes.</h2>
            </div>
            <TestimonialCarousel
              testimonials={[
                {
                  quote:
                    "Escribe aquí una cita corta de un cliente satisfecho.",
                  name: "Nombre Apellido",
                  location: "Ciudad",
                },
                {
                  quote:
                    "Otra cita de ejemplo que puedes reemplazar por una real.",
                  name: "Nombre Apellido",
                  location: "Ciudad",
                },
                {
                  quote: "Una tercera cita de ejemplo para el carrusel.",
                  name: "Nombre Apellido",
                  location: "Ciudad",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section section-alt" id="faq">
          <div className="container container-narrow">
            <div className="section-head">
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2>¿Tienes dudas?</h2>
            </div>
            <FaqAccordion
              items={[
                {
                  question: "¿Primera pregunta frecuente?",
                  answer: "Escribe aquí la respuesta completa.",
                },
                {
                  question: "¿Segunda pregunta frecuente?",
                  answer: "Escribe aquí la respuesta completa.",
                },
                {
                  question: "¿Tercera pregunta frecuente?",
                  answer: "Escribe aquí la respuesta completa.",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- CTA FINAL ---------- */}
        <section className="cta-final" id="contacto">
          <div className="container cta-inner">
            <h2>Un último llamado a la acción.</h2>
            <p>Una frase corta invitando a dar el siguiente paso.</p>
            <a href="mailto:hola@tumarca.com" className="btn btn-primary">
              Contáctanos
            </a>
          </div>
        </section>
      </main>

      <Footer
        columns={[
          {
            heading: "Producto",
            links: [
              { label: "Cómo funciona", href: "#como-funciona" },
              { label: "Precios", href: "#precios" },
            ],
          },
          {
            heading: "Recursos",
            links: [
              { label: "Preguntas frecuentes", href: "#faq" },
              { label: "Contacto", href: "#contacto" },
            ],
          },
        ]}
      />
    </>
  );
}
