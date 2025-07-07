import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="space-x-4 bg-primary py-2.5 flex justify-center gap-5 text-2xl text-white">
      <Link to="/" className="text-text hover:underline">
        Home
      </Link>
      <Link to="/about" className="text-text hover:underline">
        About
      </Link>
      <Link to="/contact" className="text-text hover:underline">
        Contact
      </Link>
    </nav>
  );
}
export default Header;
