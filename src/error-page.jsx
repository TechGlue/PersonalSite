import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen bg-primary p-4" id="error-page">
      <div className="m-auto">
        <p className="text-7xl mb-5 text-titles">Oops!</p>
        <p className="text-lg text-icons">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-md text-secondary">
          Sorry, unexpected error has occurred. Please contact Luis, if you need
          help or links are broken. Thank you! 
        </p>
      </div>
    </div>
  );
}
