"use client";

import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; description: string; href: string }[];
};

const NAV: NavItem[] = [
  {
    label: "Productos",
    href: "#productos",
    dropdown: [
      {
        label: "Plan base",
        description: "Lo esencial para empezar.",
        href: "#precios",
      },
      {
        label: "Plan respaldo",
        description: "Protección para tu hogar o negocio.",
        href: "#precios",
      },
      {
        label: "Plan completo",
        description: "Todo incluido, sin sorpresas.",
        href: "#precios",
      },
    ],
  },
  { label: "Precios", href: "#precios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas", href: "#faq" },
];

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          Tu Marca
        </a>

        <nav className="nav" aria-label="Principal">
          {NAV.map((item, i) => (
            <div
              key={item.label}
              className="nav-item"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <a
                href={item.href}
                className="nav-link"
                aria-expanded={item.dropdown ? openIndex === i : undefined}
              >
                {item.label}
                {item.dropdown && <span className="chevron" aria-hidden>▾</span>}
              </a>

              {item.dropdown && openIndex === i && (
                <div className="dropdown" role="menu">
                  {item.dropdown.map((d) => (
                    <a key={d.label} href={d.href} className="dropdown-item">
                      <strong>{d.label}</strong>
                      <span>{d.description}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href="#contacto" className="btn btn-primary header-cta">
          Empezar
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Empezar
          </a>
        </div>
      )}
    </header>
  );
}
