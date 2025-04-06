import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-purple-700">LearnSphere</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-purple-700">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-purple-700">
            Programs
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-purple-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;