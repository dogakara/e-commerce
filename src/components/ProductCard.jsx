import { useHistory } from "react-router-dom";

export default function ProductCard() {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push("/product/1")}
      className="border rounded-lg p-4 flex flex-col gap-2 cursor-pointer"
    >
      <div className="h-32 bg-gray-200 rounded"></div>

      <h3 className="font-semibold text-sm">Ürün Adı</h3>

      <span className="text-red-500 font-bold">₺999</span>
    </div>
  );
}
