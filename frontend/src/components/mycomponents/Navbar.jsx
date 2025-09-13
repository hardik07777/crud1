import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          🛒 ProductApp
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/create"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            + Create
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
