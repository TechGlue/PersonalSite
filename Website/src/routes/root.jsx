import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <span>Hello, I'm Luis.</span>

      <h2>Who am I?</h2>
      <p>
        I'm a Washington based Software Engineer, with a strong background
        working as a developer within the Microsoft ecosystem, with experience
        in technologies such as .NET, Azure, and MSSQL Server.
      </p>

      <h2>A bit about myself</h2>

      <p>
        In 2018, I was introduced to my first programming language, Python,
        during my first year of university. From that moment on, I was hooked
        and eagerly delved into the world of software development, absorbing
        everything I could along the way. My early projects included building a
        CLI app that could process input and output, configuring my first Linux
        build, and creating various simple programs that helped me remember the
        syntax for the different languages I used for my coursework. Over time,
        I progressed to creating websites and full-stack applications for my
        courses, becoming deeply interested in Linux, Vim, and various other
        tools that helped me code more efficiently and feel more like a software
        developer. Throughout all that time spent learning, I eventually landed
        my first software engineering internship. Looking back, I'm amazed at
        how much I've learned and grown in that short time. Just a couple of
        years ago, I didn't even know how programs were built. Now, I have
        completed my CS degree and am working full-time as a software engineer.
      </p>

      <h2>
        What I enjoy to do when I go touch grass. (anything that is not
        programming)
      </h2>
      <p>
        At heart, I'm a life long learner who enjoys to pick up any new
        knowledge that I can just because I enjoy being curious and find it very
        fufilling to always be on the hunt for new challanges. With that being
        said I'm a big enjoyer of many things. I enjoy cars because simliar to
        programming they are puzzles where you have to find the problem, repair
        it, and test if it even works. I enjoy skateboarding, while I can't do
        more than an ollie and the different types of shuvits, I have a huge
        respect for the culture and the devotion to the sport. I also like to
        build, mechanical keyboards enjoy building and trying out different
        layouts and switches.
      </p>

      <nav>
        <nav>
          <ul>
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
