//make this a component
import React from "react";
import { Link } from "react-router-dom";
import image from "./../assets/prof.png";

export default function SplashPage() {
  return (
    <>
      <div>
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-5xl text-white font-bold">
          Hello, I'm Luís
        </p>
        <p className="animate-typing overflow-hidden whitespace-nowrap"> Loo-eece (emphasis on eece) </p>
      </div>

      <img src={image} alt="my-prof" className="w-60 h-60 rounded-full mt-5" />
      <div className="mx-32">
        <p className="text-3xl mb-2">Who am I?</p>
        <p>
          I'm a Washington based Software Engineer, with a strong background
          working as a developer within the Microsoft ecosystem, with experience
          in technologies such as .NET, Azure, and MSSQL Server.
        </p>
        <br />
        <p className="text-3xl mb-2">A bit about myself</p>
        <p>
          In 2018, I was introduced to my first programming language, Python,
          during my first year of university. From that moment on, I was hooked
          and eagerly delved into the world of software development, absorbing
          everything I could along the way. My early projects included building
          a CLI app that could process input and output, configuring my first
          Linux build, and creating various simple programs that helped me
          remember the syntax for the different languages I used for my
          coursework.
        </p>
        <br />
        <p>
          Over time, I progressed to creating websites and full-stack
          applications for my courses, becoming deeply interested in Linux, Vim,
          and various other tools that helped me code more efficiently and help
          me feel more endeveloped in the software development community.
          Throughout all that time spent learning, I eventually landed my first
          software engineering internship. Looking back, I'm amazed at how much
          I've learned and grown in that short time. Just a couple of years ago,
          I didn't even know how programs were built. Now, I have completed my
          CS degree and am working full-time as a software engineer.
        </p>
        <p className="text-2xl mt-2 mb-2">
          When I'm not in front of a computer, I'm:{" "}
        </p>
        <ul className="list-disc">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            id aliquet lectus proin nibh nisl.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            id aliquet lectus proin nibh nisl.
          </li>
        </ul>

        <div className="mt-10 flex justify-center">Find me on the web: </div>
        <div className="mt-5 flex justify-center ">
          <div className="text-3xl grid grid-cols-3 gap-4">
            <Link to={`/`}>
              <i class="fa-brands fa-square-github"></i>
            </Link>
            <Link to={`/`}>
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={`resume/`}>
              <i class="fa-brands fa-spotify"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
