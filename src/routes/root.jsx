import * as React from "react";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <div className="min-h-screen bg-skin-fill text-white">
      <div className="container mx-auto py-10">
        <SplashPage />
      </div>
    </div>
  );
}
