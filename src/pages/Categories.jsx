function Categories() {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <p className="categories-desc">
        Explore our wide range of beautifully crafted furniture designed
        to match every style and space.
      </p>

      <div className="categories-grid">

        <div className="category-card">
          <h3>Sofas</h3>
          <p>Comfortable and stylish sofas for your living room.</p>
        </div>

        <div className="category-card">
          <h3>Dining Tables</h3>
          <p>Elegant dining tables for family gatherings.</p>
        </div>

        <div className="category-card">
          <h3>Chairs</h3>
          <p>Modern and ergonomic chairs for every space.</p>
        </div>

        <div className="category-card">
          <h3>Office Furniture</h3>
          <p>Professional office desks and chairs.</p>
        </div>

        <div className="category-card">
          <h3>Beds</h3>
          <p>Premium wooden beds for ultimate comfort.</p>
        </div>

        <div className="category-card">
          <h3>Storage Units</h3>
          <p>Smart storage solutions for organized living.</p>
        </div>

      </div>
    </div>
  );
}

export default Categories;
