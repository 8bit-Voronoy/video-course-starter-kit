"use client";

import { useState } from "react";

type PriceLine = { label: string; value: string };

type Plan = {
  key: string;
  name: string;
  price: string;
  priceNote?: string;
  featured?: boolean;
  badge?: string;
  bullets: string[];
  priceDetails: PriceLine[];
  ctaLabel: string;
  ctaHref: string;
};

export default function PricingTiers({ plans }: { plans: Plan[] }) {
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  return (
    <div className="pricing-grid">
      {plans.map((plan) => {
        const isOpen = openDetails === plan.key;
        return (
          <div
            key={plan.key}
            className={`price-card card${plan.featured ? " is-featured" : ""}`}
          >
            {plan.badge && <span className="badge">{plan.badge}</span>}

            <p className="price-name">{plan.name}</p>
            <p className="price-amount">
              {plan.price}
              {plan.priceNote && <span className="price-note">{plan.priceNote}</span>}
            </p>

            <ul className="price-bullets">
              {plan.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href={plan.ctaHref}
              className={`btn btn-block ${plan.featured ? "btn-primary" : "btn-outline"}`}
            >
              {plan.ctaLabel}
            </a>

            <button
              className="price-details-toggle"
              onClick={() => setOpenDetails(isOpen ? null : plan.key)}
              aria-expanded={isOpen}
            >
              Detalles del precio {isOpen ? "▲" : "▼"}
            </button>

            {isOpen && (
              <dl className="price-details">
                {plan.priceDetails.map((line) => (
                  <div key={line.label} className="price-details-row">
                    <dt>{line.label}</dt>
                    <dd>{line.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        );
      })}
    </div>
  );
}
