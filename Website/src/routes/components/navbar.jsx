import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    //create a tailwindcss style Navbar
    <nav className="py-4">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex gap-4">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            About
          </Link>
          <Link to="/" className="">
            Something
          </Link>
        </ul>
      </div>
    </nav>
  );
}
