import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Shop</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}