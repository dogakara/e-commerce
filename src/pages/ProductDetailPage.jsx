import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Product Detail</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
