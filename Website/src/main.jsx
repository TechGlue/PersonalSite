import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Error from "./error-page.jsx";
import Resume from "./routes/resume.jsx";
import About from "./routes/components/about.jsx";
import SplashPage from "./routes/splashpage.jsx";
import Equipment from "./routes/equipment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
  {
    path: "equipment",
    element: <Equipment />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "home",
    element: <SplashPage />,
  },
  {
    path: "equipment",
    element: <Equipment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
