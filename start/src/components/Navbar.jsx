import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 border-b border-slate-700 bg-slate-900">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Migrant Taco</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/hot-albums" className="text-gray-300 hover:text-white">
              Hot Albums
            </Link>
          </li>
          <li>
            <Link
              to="/trending-posts"
              className="text-gray-300 hover:text-white"
            >
              Trending Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
