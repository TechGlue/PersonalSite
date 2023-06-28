import * as React from "react";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <>
      <div className="bg-skin-fill">
        <div class="text-skin-base h-screen flex flex-col justify-center items-center">
          <div class="flex justify-center "></div>
          <SplashPage />
        </div>
        <span class="pb-2 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2023 Luís Garcia
        </span>
      </div>
    </>
  );
}
