type LogoMarqueeProps = {
  label?: string;
  logos: string[];
};

export default function LogoMarquee({
  label = "Como lo han cubierto",
  logos,
}: LogoMarqueeProps) {
  // Duplicated once so the CSS animation can loop seamlessly.
  const items = [...logos, ...logos];

  return (
    <div className="marquee">
      <p className="marquee-label">{label}</p>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="marquee-item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
