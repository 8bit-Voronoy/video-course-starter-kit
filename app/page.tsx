"use client";

import { useState } from "react";
import Signature from "./components/Signature";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#inicio">
          Luz&nbsp;Norte
        </a>
        <nav className={`main-nav${navOpen ? " is-open" : ""}`}>
          <a href="#historia" onClick={closeNav}>Mi historia</a>
          <a href="#experiencia" onClick={closeNav}>La experiencia</a>
          <a href="#galeria" onClick={closeNav}>Fotografía</a>
          <a href="#proceso" onClick={closeNav}>Cómo funciona</a>
          <a href="#precios" onClick={closeNav}>Inversión</a>
        </nav>
        <a className="btn btn-primary" href="#contacto">
          Reserva tu fecha
        </a>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div
            className="hero-media"
            role="img"
            aria-label="Familia abrazada en un bosque al atardecer"
          ></div>
          <div className="hero-copy">
            <p className="kicker">Fotografía Luz Norte · Oaxaca</p>
            <h1>
              Tómate un momento
              <br />
              para lo que de verdad
              <br />
              importa.
            </h1>
            <p className="lede">
              Sesiones fotográficas pensadas para reconectar contigo, con las
              personas que amas y con los animales que ya son familia — no
              solo para posar frente a una cámara.
            </p>
            <a className="btn btn-light" href="#experiencia">
              Descubre tu experiencia
            </a>
          </div>
        </section>

        <section id="historia" className="story">
          <div className="story-text">
            <p className="kicker">Mi historia</p>
            <h2>Este es tu momento para bajar el ritmo.</h2>
            <p>
              La vida avanza rápido y muchas veces se nos olvida detenernos
              junto a quienes le dan sentido a nuestros días. Fotografía Luz
              Norte nace de la idea de que una sesión de fotos puede ser, en
              sí misma, un espacio para conectar, reír y estar presentes.
            </p>
            <p>
              Tu historia merece algo más que una sesión rápida frente a un
              fondo de cartón.
            </p>
          </div>
          <div
            className="story-media"
            role="img"
            aria-label="Retrato de una madre y sus hijas riendo al aire libre"
          ></div>
        </section>

        <section id="experiencia" className="signature">
          <div className="signature-copy">
            <p className="kicker kicker-light">La experiencia signature</p>
            <h2>Más que una sesión de fotos.</h2>
            <p>
              La experiencia signature combina fotografía con una actividad
              que ustedes elijan — una caminata, una comida, un oficio
              compartido. La foto es la huella; el momento en sí es el
              verdadero producto.
            </p>
            <p>
              No se trata de una lista de poses, sino del punto de partida
              para vivir algo juntos y quedarse con algo real al final.
            </p>
            <a className="btn btn-outline-light" href="#precios">
              Conoce la experiencia signature
            </a>
          </div>
          <div
            className="signature-media"
            role="img"
            aria-label="Mujer con un caballo en un bosque otoñal"
          ></div>
        </section>

        <section id="galeria" className="gallery">
          <p className="kicker centered">Para quién y qué es esto</p>
          <h2 className="centered">Los momentos que importan.</h2>
          <p className="section-lede centered">
            Niños, mascotas, parejas y familias son sujetos únicos. Son ellos
            quienes definen la sesión, el ambiente y la conexión que queremos
            capturar.
          </p>
          <div className="gallery-grid">
            <figure>
              <div
                className="ph"
                role="img"
                aria-label="Retrato de mujer en abrigo rojo"
              ></div>
              <figcaption>Ella</figcaption>
            </figure>
            <figure>
              <div
                className="ph"
                role="img"
                aria-label="Niño abrazando a su perro"
              ></div>
              <figcaption>El niño</figcaption>
            </figure>
            <figure>
              <div
                className="ph"
                role="img"
                aria-label="Perro blanco de pie en un camino"
              ></div>
              <figcaption>El animal</figcaption>
            </figure>
            <figure className="wide">
              <div
                className="ph"
                role="img"
                aria-label="Familia sentada junta al aire libre"
              ></div>
              <figcaption>El vínculo que los hace familia</figcaption>
            </figure>
          </div>
        </section>

        <section id="proceso" className="steps">
          <p className="kicker centered">Cómo funciona</p>
          <h2 className="centered">Tu experiencia, paso a paso.</h2>
          <ol className="steps-grid">
            <li>
              <span className="step-n">01</span>
              <h3>Cuéntame tu idea</h3>
              <p>
                Escríbeme sobre tu familia, tu pareja o tu mascota y lo que te
                gustaría vivir.
              </p>
            </li>
            <li>
              <span className="step-n">02</span>
              <h3>Prepara el día</h3>
              <p>
                Te acompaño a definir vestuario, lugar y horario según la luz
                y la temporada.
              </p>
            </li>
            <li>
              <span className="step-n">03</span>
              <h3>Vive la sesión</h3>
              <p>
                Nos enfocamos en el momento, no en la pose; las fotos surgen
                de ahí.
              </p>
            </li>
            <li>
              <span className="step-n">04</span>
              <h3>Recibe tus recuerdos</h3>
              <p>
                Eliges tus favoritas y las recibes listas para conservar o
                imprimir.
              </p>
            </li>
          </ol>
        </section>

        <section className="keepsakes">
          <div
            className="keepsakes-media"
            role="img"
            aria-label="Retrato ilustrado y detalle de una impresión artesanal"
          ></div>
          <div className="keepsakes-copy">
            <p className="kicker">De la sesión a tu casa</p>
            <h2>Hecho para conservarse.</h2>
            <p>
              Tus fotos favoritas no deberían quedarse solo en el teléfono.
              Ofrezco impresiones de bellas artes, obras en madera, álbumes y
              piezas cuidadosamente enmarcadas para que tu historia tenga un
              lugar en tu hogar.
            </p>
            <a className="btn btn-outline" href="#contacto">
              Conoce las piezas disponibles
            </a>
          </div>
        </section>

        <section id="precios" className="pricing">
          <p className="kicker centered">Dos formas de vivir tu historia</p>
          <h2 className="centered">Elige la experiencia que va contigo.</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <p className="price-label">Experiencia fotográfica</p>
              <p className="price-amount">$2,950 MXN</p>
              <p className="price-desc">
                Sesión clásica de una hora, en el lugar que elijas, con una
                selección de fotos editadas.
              </p>
              <a className="btn btn-outline" href="#contacto">
                Elegir esta experiencia
              </a>
            </div>
            <div className="price-card featured">
              <span className="badge">La más elegida</span>
              <p className="price-label">Experiencia signature</p>
              <p className="price-amount">Desde $3,950 MXN</p>
              <p className="price-desc">
                La sesión completa + actividad compartida, guía personalizada
                y un producto tangible al final.
              </p>
              <a className="btn btn-primary" href="#contacto">
                Elegir la signature
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="cta-final">
          <div
            className="cta-media"
            role="img"
            aria-label="Familia numerosa reunida al atardecer en el bosque"
          ></div>
          <div className="cta-copy">
            <p className="kicker kicker-light">Reserva tu sesión</p>
            <h2>Tómate un momento para lo que de verdad importa.</h2>
            <p>
              Cuéntame sobre ustedes y encontremos la fecha y el lugar
              perfectos para su sesión.
            </p>
            <a className="btn btn-light" href="mailto:hola@luznortefoto.mx">
              Escríbeme para reservar
            </a>
            <p className="signature-line">
              Con cariño, <Signature text="Tu Nombre" />
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="logo">Luz&nbsp;Norte</p>
          <p>Fotografía de familia, pareja y mascotas en Oaxaca, México.</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Navegación</p>
          <a href="#historia">Mi historia</a>
          <a href="#experiencia">La experiencia</a>
          <a href="#galeria">Fotografía</a>
          <a href="#precios">Inversión</a>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Contacto</p>
          <a href="mailto:hola@luznortefoto.mx">hola@luznortefoto.mx</a>
          <a href="tel:+529511234567">+52 951 123 4567</a>
          <a href="#contacto">Aviso de privacidad</a>
        </div>
        <p className="footer-bottom">
          © 2026 Fotografía Luz Norte. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
