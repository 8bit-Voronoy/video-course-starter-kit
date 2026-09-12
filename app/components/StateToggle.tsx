"use client";

import { useState } from "react";

type ToggleState = {
  key: string;
  label: string;
  title: string;
  description: string;
};

type StateToggleProps = {
  states: [ToggleState, ToggleState];
};

export default function StateToggle({ states }: StateToggleProps) {
  const [active, setActive] = useState(0);
  const current = states[active];

  return (
    <div className="state-toggle">
      <div className="toggle-switch" role="tablist">
        {states.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={active === i}
            className={`toggle-btn${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="toggle-panel">
        <h3>{current.title}</h3>
        <p>{current.description}</p>
      </div>
    </div>
  );
}
