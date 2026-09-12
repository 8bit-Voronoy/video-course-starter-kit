type Step = {
  number: string;
  title: string;
  description: string;
  imageAlt: string;
};

export default function HowItWorks({ steps }: { steps: Step[] }) {
  return (
    <ol className="steps-list">
      {steps.map((step, i) => (
        <li key={step.number} className={`step-row${i % 2 === 1 ? " is-reversed" : ""}`}>
          <div className="step-copy">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <div className="step-media" role="img" aria-label={step.imageAlt}></div>
        </li>
      ))}
    </ol>
  );
}
