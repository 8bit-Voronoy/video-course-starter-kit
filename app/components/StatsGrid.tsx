type Stat = {
  value: string;
  title: string;
  description: string;
};

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="stats-grid">
      {stats.map((s) => (
        <div key={s.title} className="stat-card card">
          <p className="stat-value">{s.value}</p>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}
