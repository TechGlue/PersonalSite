import React, { useState } from "react";

const DarkModeToggle = () => {
  //Create a state variable to keep track of the current theme
  const [darkMode, setDarkMode] = useState(false);

  //on click change the state to no darkmode
  const toggleDarkMode = () => {
	  setDarkMode(!darkMode);
	  localStorage.setItem("darkMode", !darkMode);
	  console.log("Current Local Storage: ", localStorage.getItem("darkMode"));
  };

  return (
	<button onClick={toggleDarkMode}> {darkMode ? 'Light Mode' : 'Dark Mode'}</button>
  );
};

export default DarkModeToggle;
