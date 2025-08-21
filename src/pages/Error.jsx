import { NavLink, useRouteError } from "react-router-dom";
import { GoHome } from "react-icons/go";

export const ErrorPage = () => {
const error = useRouteError();  //hook to get the error obj.
console.log(error);


  return (
  <>
  <h1>Error 404: Page Not Found</h1>
  {error&& <p>{error.data}</p>}
  <NavLink to ="/"><button>Go home <GoHome /></button></NavLink>
  </>
  );
};
