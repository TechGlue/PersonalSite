import * as React from "react";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <>
      <div class="bg-skin-fill text-skin-base  h-screen flex flex-col justify-center items-center">
        <div class="flex justify-center ">
          <Navbar />
        </div>
        <SplashPage />
      </div>
    </>
  );
}
