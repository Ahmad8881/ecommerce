function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      text: "Amazing sofa quality. Worth the price!"
    },
    {
      name: "Aisha",
      text: "Fast delivery and great support."
    },
    {
      name: "Karan",
      text: "My living room looks premium now."
    }
  ];

  return (
    <section className="reviews-section">
      <h2 className="section-title">Customer Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">“{review.text}”</p>
            <h4 className="review-name">— {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;