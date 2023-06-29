import * as React from "react";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <>
      <div>
        <div class="bg-skin-fill text-skin-base h-screen flex flex-col justify-center items-center">
          <SplashPage />
        </div>
      <span class="bg-skin-fill pb-2 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©2023 Luís Garcia
      </span>
      </div>
    </>
  );
}
