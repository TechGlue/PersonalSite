//make this a component
import React from "react";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <div class="">
      <div class="grid grid-cols-1 gap-2">
        <div>
          <div className="">
            <p className="border-r-white pr-3 text-5xl text-titles font-bold">
              Hello, I'm Luís
            </p>
            <p className="border-r-white pr-3 text-1xl text-copyright whitespace-nowrap">
              {" "}
              (Loo-eece){" "}
            </p>
          </div>
        </div>

        <p className="text-3xl mb-2 font-bold text-secondary-titles">
          About me
        </p>
        <div>
          <p className="text-2xl text-secondary body-font font-firacode">
            I'm a Washington based Software Engineer, who mostly works with C#
            at work but has a strong passion and curiosity for other
            technologies that changes the way I approach problems and overall
            pushes me to get out of my shell.
          </p>
        </div>

        <p className="text-3xl mb-2 font-bold text-secondary-titles">
          A bit about my journey
        </p>
        <div className="text-secondary text-2xl">
          <p>
            I'm a{" "}
            <b>
              Eastern Washington University Graduate, with a degree in Computer
              Science
            </b>
            . Back in 2018, I was entering my first Computer Science class with
            no technical background, and I felt completely out of my depth.
            Fortunately, I persevered, and it has changed my life for the
            better. Through a lot of trial and error, assistance from my peers,
            and countless hours of coding in my free time, tackling projects big
            and small, I managed to graduate and secure my first full-time
            Software Engineering position at <b>Premera Blue Cross</b> in the
            Fall of 2023.
          </p>
        </div>

        <p className="text-3xl font-bold text-secondary-titles">
          My current goals
        </p>
        <div className="text-secondary text-2xl">
          <p className="mt-2">
            Reflecting back at the last couple of years of my undergrad in my
            head it feels like it's time for a breather right you got over that
            hump of getting a degree??? But nah I really grew to appreciate all
            the struggles that it took to get something done so I want to
            continue that marathon.
          </p>
          <p className="mt-2">
            Right now, my main goal is to grow as a person by continuing to push
            myself to learn new languages and frameworks. Additionally, I aim to
            regain my physical fitness through strength and weight training.
            Hopefully, I can find that elusive balance in this ever-changing
            world.
          </p>
        </div>

        <p className="text-3xl mt-2 mb-2 font-bold text-secondary-titles">
          Quick Facts:{" "}
        </p>
        <div>
          <ul className="text-secondary list-disc ml-8 text-2xl">
            <li>Currently learning GO, slowley but surely...</li>
            <li>
              I enjoy configruing my terminal and learning new tools to "boost
              my productivity"
            </li>
            <li>Linux enjoyer</li>
            <li>Split keyboard enjoyer</li>
          </ul>
          <div className="mt-10 flex justify-left text-icons ">
            <div className="text-3xl grid grid-cols-3 gap-4">
              <a href="https://github.com/TechGlue">
                <i class="fa-brands fa-square-github hover:text-icons-hover"></i>
              </a>
              <a href="malito:lgarcia29@ewu.edu">
                <i class="fa-regular fa-square-envelope hover:text-icons-hover"></i>
              </a>
              <a href="https://open.spotify.com/playlist/2LeH8YzsZs4wH2hE6iSk9y?si=06545348f9d4406b">
                <i class="fa-regular fa-spotify hover:text-icons-hover"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
