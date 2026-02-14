import { useState } from "react";

function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Furniture Posted Successfully!");
  };

  return (
    <div className="sell-container">
      <div className="sell-card">
        <h2>Sell Your Furniture</h2>
        <p className="subtitle">
          Fill in the details below to list your furniture for sale.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Furniture Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Post Ad</button>
        </form>
      </div>
    </div>
  );
}

export default Sell;
