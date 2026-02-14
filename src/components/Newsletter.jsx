function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Join Our Newsletter</h2>
      <p>Get updates on new arrivals and special offers.</p>
      <div className="newsletter-box">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;