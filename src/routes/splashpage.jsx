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
        <p className="animate-typing overflow-hidden whitespace-nowrap">
          {" "}
          Loo-eece (emphasis on eece){" "}
        </p>
      </div>

      <img src={image} alt="my-prof" className="w-60 h-60 rounded-full mt-5" />
      <div className="mx-32">
        <p className="text-3xl mb-2">Who am I?</p>
        <p>
          I'm a Washington based Software Engineer, with a strong background
          working as a developer within the Microsoft ecosystem, with experience
          in technologies such as .NET, Azure, and MSSQL Server. And a passion for curiosities in the world of software development.
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
          coursework. Like everything, in life the more consistent you stay with
          something the greater chances you have of getting better at it. This
          consistency lead to me snagging my self my first internship in 2022,
          and my first programming job. 
        </p>
        <p className="text-2xl mt-2 mb-2">
          When I'm not in front of a computer, I'm:{" "}
        </p>
        <ul className="list-disc ml-8">
          <li>Outside touching grass.</li>
          <li>
            Trying to get better at cooking, mainly Mexican breakfast dishes
          </li>
          <li>
			Listening to music, mainly hip-hop and R&B
          </li>
          <li>
            Spending way too much time and money tinkering with keyboards :(
          </li>
        </ul>

        <div className="mt-10 flex justify-center">Learn more about me: </div>
        <div className="mt-5 flex justify-center ">
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
