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
						I'm a Washington based Software Engineer, who mostly works with C#
						at work but has a strong passion and curiosity for other
						technologies that help shape the way I work and think.
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
						. Back in 2018, I entered my first Computer Science class with no technical background. That in my intro to programming class, installing and running a Python 'hello world' script seemed like an impossible task at the time. Despite the discomfort, I persevered, and it has changed my life for the better. It required a lot of trial and error, assistance from my peers, and countless hours spent in the lab programming in my free time. I Eventually, managed to graduate with my bachelor's degree and secure my first full-time Software Engineering position in the Fall of 2022.
					</p>
				</div>

				<p className="text-3xl font-bold text-secondary-titles">
					My current goals
				</p>
				<div className="text-secondary text-2xl">
					<p className="mt-2">
						Right now, my main goal is to grow as a individual by challenging
						myself to learn new (to me) languages and frameworks. I also asspire to
						regain my physical fitness through strength and weight training. Trying to to return to my pre-COVID weight and conditioning. Additionally, I intend on doing more fufilling work/activties, maybe 2024 will be the year I dive into open source and blogging. Aiming to do more stimulating activites after work, hoping to break away from the habit of doomscrolling and other time suckers.
					</p>
				</div>

				<p className="text-3xl mt-2 mb-2 font-bold text-secondary-titles">
					Quick Facts:{" "}
				</p>
				<div>
					<ul className="text-secondary list-disc ml-8 text-2xl">
						<li>Currently learning GO, slowley but surely...</li>
						<li>
							I enjoy configiruing my terminal and learning new tools to "boost
							my productivity"
						</li>
						<li>Linux enjoyer</li>
						<li>Split keyboard enjoyer</li>
						<li>Amateur baker</li>
					</ul>
					<div className="mt-10 flex justify-left text-icons ">
						<div className="text-3xl grid grid-cols-4 gap-4">
							<a href="https://github.com/TechGlue">
								<i class="fa-brands fa-square-github hover:text-icons-hover"></i>
							</a>
							<a href="malito:lgarcia29@ewu.edu">
								<i class="fa-regular fa-square-envelope hover:text-icons-hover"></i>
							</a>
							<a href="https://www.linkedin.com/in/luis-garcia-097a60237/">
								<i class="fa-regular fa-linkedin hover:text-icons-hover"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
