import React from "react";

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
I'm a Washington-based Software Engineer who mostly works in C#, but I have a strong passion and curiosity for exploring other technologies that enhance my skills and boost my developer confidence. I've been writing code since 2018 at the start of my computer science degree, and professionally for the last 2 years. 
					</p>
				</div>

				<p className="text-3xl font-bold text-secondary-titles">
					My current goals
				</p>
				<div className="text-secondary text-2xl">
					<p className="mt-2">
Right now, a couple of my 2024 goals are to grow my skills by challenging myself to learn new (to me) languages and frameworks. A personal goal of mine is to get healthier, do more cardio, weightlifting (PRs: Squat 255 and Bench 185 lbs...), and anything outdoors, really trying to avoid the sedentary lifestyle. Additionally, I want to break out of my usual routine, try some more stimulating activities after work, and break away from bad habits. Plans are to expand this site and start blogging about my experiences and projects.
					</p>
				</div>

				<p className="text-3xl mt-2 mb-2 font-bold text-secondary-titles">
					Interests{" "}
				</p>
				<div>
					<ul className="text-secondary list-disc ml-8 text-2xl">
						<li>Currently learning Go, slowley but surely...</li>
						<li>
							I enjoy configuring my terminal and learning new tools to "boost
							my productivity"
						</li>
						<li>Linux enjoyer</li>
						<li>Split keyboard enjoyer (<a className="underline hover:text-secondary-titles" href="https://www.moergo.com/">MoErgo Glove80</a>)</li>
						<li>Amateur cook</li>
					</ul>
					<div className="mt-10 flex justify-left text-icons ">
						<div className="text-3xl grid grid-cols-4 gap-4">
							<a href="https://github.com/TechGlue">
								<i class="fa-brands fa-square-github hover:text-icons-hover"></i>
							</a>
							<a href="https://www.linkedin.com/in/luis-garcia-097a60237/">
								<i class="fa-brands fa-linkedin hover:text-icons-hover"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
