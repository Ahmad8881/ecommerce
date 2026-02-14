import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <div className="container">
        <h2>Available Furniture</h2>
        <div className="grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      {/* Extra Sections for scroll and premium feel */}
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;