import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {/* IMAGE */}
      <div className="w-full h-64 bg-gray-200 rounded-lg md:h-96"></div>

      {/* INFO */}
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold md:text-2xl">
          Ürün Adı {id}
        </h1>

        <span className="text-red-500 font-bold text-xl">
          ₺999
        </span>

        <p className="text-sm text-gray-600 md:text-base">
          Bu alanda ürün açıklaması yer alır. Mobilde tek kolon,
          desktopta daha geniş görünür.
        </p>

        <button className="mt-4 bg-black text-white py-3 rounded-lg">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
