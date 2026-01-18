import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b px-4 py-3 flex gap-6 text-sm">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact</Link>
    </header>
  );
}
