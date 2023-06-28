//make this a component
import React from "react";
import { Link } from "react-router-dom";
import image from "./../assets/prof.png";

export default function SplashPage() {
  return (
    <>
      <div className="mx-32">
        <div className="pb-4">
          <p className="border-r-white pr-3 text-5xl text-white font-bold">
            Hello, I'm Luís
          </p>
          <p className="border-r-white pr-3 whitespace-nowrap">
            {" "}
            Loo-eece (emphasis on eece){" "}
          </p>
        </div>
        <p className="text-3xl mb-2 font-bold">Who am I?</p>
        <p>
          I'm a Washington based Software Engineer. Who mostly works with C# at
          work but has a strong passion and curisoty for other languages that
          change the way I approach problems and think.
        </p>
        <br />
        <p className="text-3xl mb-2 font-bold">A bit about myself</p>
        <p>
          In 2018, I was introduced to my first programming language, Python,
          during my first year of university. From that moment on, I was hooked
          and eagerly delved into the world of software development, absorbing
          everything I could along the way. My early projects included building
          a CLI app that could process input and output, configuring my first
          Linux build, and creating various simple programs that helped me
          remember the syntax for the different languages I used for my
          coursework. Like everything, in life the more consistent you stay with
          something the greater chances you have of getting better at it. This
          consistency lead to me snagging my self my first internship in 2022,
          and my first programming job.
        </p>
        <p className="text-3xl mt-2 mb-2 font-bold">Quick Facts: </p>
        <ul className="list-disc ml-8">
          <li>Linux enthusiast</li>
          <li>Currently learning GO, slowley but surely...</li>
          <li>
            I enjoy configruing my terminal and learning new tools to boost my
            productivity
          </li>
          <li>Split keyboard enthusiast (can't live without it)</li>
        </ul>

        <div className="mt-5 flex justify-left">
          <div className="text-3xl grid grid-cols-3 gap-4">
            <Link to={`/`}>
              <i class="fa-brands fa-square-github"></i>
            </Link>
            <Link to={`/`}>
              <i class="fa-brands fa-spotify"></i>
            </Link>
            <Link to={`/`}>
              <i class="fa-regular fa-square-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
