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

				<p className="text-3xl font-bold text-secondary-titles">
					My current goals
				</p>
				<div className="text-secondary text-2xl">
					<p className="mt-2">
						Right now, my main goal is to grow as a individual by challenging
						myself to learn new (to me) languages and frameworks. I also aspire to
						get healthy again through strength and weight training. Trying to to return to my pre-COVID weight and conditioning. Additionally, I intend on doing more fufilling work/activties, maybe 2024 will be the year I dive into open source and blogging. Aiming to do more stimulating activities after work, hoping to break away from bad habits.
					</p>
				</div>

				<p className="text-3xl mt-2 mb-2 font-bold text-secondary-titles">
					Quick Facts:{" "}
				</p>
				<div>
					<ul className="text-secondary list-disc ml-8 text-2xl">
						<li>Currently learning GO, slowley but surely...</li>
						<li>
							I enjoy configuring my terminal and learning new tools to "boost
							my productivity"
						</li>
						<li>Linux enjoyer</li>
						<li>Split keyboard enjoyer</li>
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
