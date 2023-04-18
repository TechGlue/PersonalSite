import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    //create a tailwindcss style Navbar
    <nav className="py-4">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex gap-4">
          <Link to="/" className="">
           Works 
          </Link>
          <Link to="/" className="">
           Gallery 
          </Link>
          <Link to="/" className="">
           Contact 
          </Link>
        </ul>
      </div>
    </nav>
  );
}
