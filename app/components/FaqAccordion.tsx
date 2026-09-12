"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="faq-item card">
            <button
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="faq-answer">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
