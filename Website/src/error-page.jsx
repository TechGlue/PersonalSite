import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Please contact Luis, if you need help or links are broken.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
