import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2>Why Choose Us</h2>

      <div className="why-grid">
        <div className="why-card">
          <div className="icon">🏆</div>
          <h3>Premium Quality</h3>
          <p>High-grade wood and materials for long-lasting furniture.</p>
        </div>

        <div className="why-card">
          <div className="icon">🚚</div>
          <h3>Free Delivery</h3>
          <p>Fast and secure delivery across the country.</p>
        </div>

        <div className="why-card">
          <div className="icon">💰</div>
          <h3>Affordable Prices</h3>
          <p>Best quality furniture at competitive prices.</p>
        </div>

        <div className="why-card">
          <div className="icon">⭐</div>
          <h3>Customer Satisfaction</h3>
          <p>Thousands of happy customers trust our products.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
