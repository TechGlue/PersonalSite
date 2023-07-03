//make this a component
import React from "react";
import { Link } from "react-router-dom";
import image from "./../assets/square.webp";

export default function SplashPage() {
  return (
    <>
      <div className="">
        <p className="border-r-white pr-3 text-5xl text-white font-bold">
          Hello, I'm Luís
        </p>
        <p className="border-r-white pr-3 text-1xl whitespace-nowrap">
          {" "}
          (Loo-eece){" "}
        </p>
        <img src={image} alt="my-prof" className="w-60 h-60 mt-1" />
      </div>
      <br />
      <p className="text-3xl mb-2 font-bold">Who am I?</p>
      <p>
        I'm a Washington based Software Engineer. Who mostly works with C# at
        work but has a strong passion and curiosity for other technologies that
        changes the way I approach problems and overall pushes me to get out of
        my shell.
      </p>
      <br />
      <p className="text-3xl mb-2 font-bold">A bit about my journey</p>
      <p>
        I'm a Eastern Washington Univeristy Graduate, who back in 2018 was
        entering their first Computer Science class, and as a person with no
        technical background, I felt way over my head. Luckily, I stuck through
        it and has changed my life for the better. Through alot of trial and
        error, help from my peers, and many hours of coding in my free time on
        anything big or small. I ended up graduating and starting my first
        Software Engineering position at Premera Blue Cross in the Fall of 2023.
      </p>
      <p className="mt-2">
        Looking back, it feels like it's been a long time since I started my
        journey, but I really grew to appreciate all the struggles that it took
        to get here. Right now, my main goal is to grow as a developer by
        continuing to push myself to learn new things and hopefully help others
        along the way.
      </p>

      <p className="text-3xl mt-2 mb-2 font-bold">Quick Facts: </p>
      <ul className="list-disc ml-8">
        <li>Linux enthusiast</li>
        <li>Currently learning GO, slowley but surely...</li>
        <li>
          I enjoy configruing my terminal and learning new tools to boost my
          productivity
        </li>
        <li>Split keyboard enjoyer</li>
      </ul>
      <div className="mt-10 flex justify-left">
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
    </>
  );
}
