import React from "react";

export default function Services({ t }) {
  const items = [
    { icon: "🔍", title: t.service1Title, text: t.service1Text },
    { icon: "📄", title: t.service2Title, text: t.service2Text },
    { icon: "💰", title: t.service3Title, text: t.service3Text },
    { icon: "🤝", title: t.service4Title, text: t.service4Text },
  ];

  return (
    <section className="services">
      <h2>{t.servicesTitle}</h2>

      <div className="services-grid">
        {items.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
