import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WoodNest</div>

     <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/sell">Shop</Link></li>
  <li><Link to="/categories">Categories</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>


      <div className="nav-icons">
        <span className="search">🔍</span>
        <span className="cart">🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;
