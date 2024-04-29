import * as React from "react";
import SplashPage from "./splashpage.jsx";
export default function Root() {
  return (
    <div className="bg-primary min-h-screen dark:bg-primary-dark">
      <div className="p-10 grid grid-cols-1 gap-4">
        <div className="container mx-auto py-20">
		<button id="theme-toggle" type="button" className="text-gray-500">
		</button>
          <SplashPage />
        </div>
        <div>
          <footer className="text-copyright text-sm dark:text-copyright">
            <div className="container mx-auto text-left">
              <p>&copy; 2023 Luís Garcia. All rights reserved.</p>
              <p className="py-1">
                Made with{" "}
                <a
                  className="underline hover:text-secondary"
                  href="https://react.dev/"
                >
                  React.js
                </a>{" "}
                +{" "}
                <a
                  className="underline hover:text-secondary"
                  href="https://tailwindcss.com/"
                >
                  Tailwind CSS
                </a>{" "}
                +{" "}
                <a
                  className="underline hover:text-secondary"
                  href="https://github.com/morhetz/gruvbox"
                >
                  Gruvbox Theme
                </a>{" "}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
