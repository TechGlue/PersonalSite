import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import Error from "./error-page.jsx"
import Works from "./routes/works.jsx"
import Contact from "./routes/contact.jsx"
import About from "./routes/about.jsx"

const router = createBrowserRouter([
  {
    path: "/",
      element: <Root />,
      errorElement:<Error/>,
  },
    {
        path:"about", 
        element:<About/>,
    },  
    {
        path:"contact", 
        element:<Contact/>,
    }, 
    {
        path:"works", 
        element:<Works/>,
    } 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
