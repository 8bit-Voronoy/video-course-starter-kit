type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export default function Footer({ columns }: { columns: FooterColumn[] }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="logo">Tu Marca</p>
          <p>Reemplaza esto con una línea corta sobre tu negocio.</p>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="footer-col">
            <p className="footer-heading">{col.heading}</p>
            {col.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <p className="footer-bottom">
          © {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
