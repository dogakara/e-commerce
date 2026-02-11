
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">E-Commerce</h3>
            <p className="text-sm">
              Kaliteli ürünler, hızlı kargo ve güvenilir alışveriş deneyimi sunuyoruz. Bize katılın!
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">Hakkımızda</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">İletişim</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Ekibimiz</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Kariyer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Yardım</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white transition">Sıkça Sorulan Sorular</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition">Kargo & Teslimat</Link></li>
              <li><Link to="/returns" className="hover:text-white transition">İade & Değişim</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Gizlilik Politikası</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.93 6.07a6.5 6.5 0 01-9.86 8.79l-3.07.85.85-3.07a6.5 6.5 0 118.08-6.57z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm7.846-11.846a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} E-Commerce. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}