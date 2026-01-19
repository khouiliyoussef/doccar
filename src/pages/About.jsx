import React from "react";

export default function About({ t }) {
  return (
    <section className="about">
      <h2>{t.aboutTitle}</h2>

      <div className="about-content">
        <div className="about-text">
          <p>{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
          <p>{t.aboutText3}</p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>+500</h3>
            <span>{t.aboutStat1}</span>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <span>{t.aboutStat2}</span>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <span>{t.aboutStat3}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
