import * as React from "react";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <div className="bg-slate-500 text-white min-h-screen">
      <div className="p-10 grid grid-cols-1 gap-4">
        <div className="container mx-auto">
          <SplashPage />
        </div>
        <div>

    </div>
      </div>
    </div>
  );
}
