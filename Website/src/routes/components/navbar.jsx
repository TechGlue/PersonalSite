import React from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  //use tailwind component navbar

  return (
		<div>
			<Link className="text-3xl font-bold underline" to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/about">Link 1</Link>
			<Link to="/about">Link 2</Link>
		</div>
	);
}

