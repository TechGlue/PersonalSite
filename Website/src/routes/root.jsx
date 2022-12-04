import {Outlet, Link} from "react-router-dom";

export default function Root() {
  return (
      <>
      <h2>Hello world, this is the homepage for the personal website</h2>
      <nav>
              <nav>
          <ul>
            <li>
              <Link to={`about/`}>About me</Link>
            </li>
            <li>
              <Link to={`contact/`}>Contact Me</Link>
            </li>
            <li>
              <Link to={`works/`}>Works</Link>
            </li>
          </ul>
        </nav>
        </nav>
    </>
  );
}
