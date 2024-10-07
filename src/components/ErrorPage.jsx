import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error = useRouteError();
    console.log(error);
    return(
        <div>
         <h1>Error 404 not found</h1>
        {error&&<p>{error.data}</p>}
        <NavLink to="/"><button>Go home</button></NavLink>
        </div>
    )
}