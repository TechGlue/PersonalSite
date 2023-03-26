import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import SplashPage from "./splashpage.jsx";
import Navbar from "./components/navbar.jsx";
export default function Root() {
  return (
    <>
    <h1 className="">Hello world</h1>
      <Navbar />
      <SplashPage />
    </>
  );
}
