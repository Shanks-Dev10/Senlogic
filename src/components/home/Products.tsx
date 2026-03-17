import Product1 from "@/assets/product1.webp";

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto py-24">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <img src={Product1} alt="product1" />
        </div>
      </div>
    </section>
  );
}
