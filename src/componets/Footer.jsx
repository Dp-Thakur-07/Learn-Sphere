import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 LearnSphere. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="#" className="text-sm text-muted-foreground hover:text-purple-700">
            Privacy Policy
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-purple-700">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;