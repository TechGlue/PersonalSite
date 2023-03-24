//make this a component
import React from "react";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <>
      <h1>Hello, I'm Luís. 👋 </h1>

      <h2>Who am I?</h2>
      <p>
        I'm a Washington based Software Engineer, with a strong background
        working as a developer within the Microsoft ecosystem, with experience
        in technologies such as .NET, Azure, and MSSQL Server.
      </p>
      <nav>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Contact Me (icons)</Link>
            </li>
            <li>
              <Link to={`/`}>Github (icons)</Link>
            </li>
            <li>
              <Link to={`resume/`}>Resume (and other boring stuff)(icons)</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
