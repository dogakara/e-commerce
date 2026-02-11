import { Link } from "react-router-dom";

export default function AddressPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Adreslerim</h1>

        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Adres ekleme özelliği yakında eklenecek.
          </p>
          <Link 
            to="/cart" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Sepete Dön
          </Link>
        </div>
      </div>
    </div>
  );
}