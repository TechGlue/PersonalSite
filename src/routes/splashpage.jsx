import React from "react";


function toggleDarkMode(){
  console.log("Dark Mode Toggled");


}

export default function SplashPage() {
	return (
		<div className="">
	  <button id="darkModeToggle" onClick={toggleDarkMode()} className="rounded-full bg-white p-2">Dark Mode</button>
	  <button className="rounded-full bg-white p-2">Light Mode</button>
			<div className="grid grid-cols-1 gap-2">
				<div>
					<div className="">
						<p className="border-r-white pr-3 text-5xl text-titles font-bold dark:text-titles-dark">
							Hello, I'm Luís
						</p>
						<p className="border-r-white pr-3 text-1xl text-copyright whitespace-nowrap dark:text-copyright-dark">
							{" "}
							(Loo-eece){" "}
						</p>
					</div>
				</div>

				<p className="text-3xl mb-2 font-bold text-secondary-titles dark:text-secondary-titles-dark">
					About me
				</p>
				<div>
					<p className="text-2xl text-secondary body-font font-firacode dark:text-secondary-dark">
						I'm a Washington based Software Engineer, who mostly works with C#
						at work but has a strong passion and curiosity for other
						technologies that help shape the way I work and think.
					</p>
				</div>

				<p className="text-3xl font-bold text-secondary-titles dark:text-secondary-titles-dark">
					My current goals
				</p>
				<div className="text-secondary text-2xl dark:text-secondary-dark">
					<p className="mt-2">
						Right now, my main goal is to grow as a individual by challenging
						myself to learn new (to me) languages and frameworks. I also aspire to
						regain my physical fitness through strength and weight training. Trying to to return to my pre-COVID weight and conditioning. 
					</p>
				</div>

				<p className="text-3xl mt-2 mb-2 font-bold text-secondary-titles dark:text-secondary-titles-dark">
					Quick Facts:{" "}
				</p>
				<div>
					<ul className="text-secondary list-disc ml-8 text-2xl dark:text-secondary-dark">
						<li>Currently learning GO, slowley but surely...</li>
						<li>
							I enjoy configuring my terminal and learning new tools to "boost
							my productivity"
						</li>
						<li>Linux enjoyer</li>
						<li>Split keyboard enjoyer</li>
						<li>Amateur Baker</li>
					</ul>
					<div className="mt-10 flex justify-left text-icons dark:text-icons-dark">
						<div className="text-3xl grid grid-cols-4 gap-4">
							<a href="https://github.com/TechGlue">
								<i className="fa-brands fa-square-github hover:text-icons-hover"></i>
							</a>
							<a href="https://www.linkedin.com/in/luis-garcia-097a60237/">
								<i className="fa-brands fa-linkedin hover:text-icons-hover"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
