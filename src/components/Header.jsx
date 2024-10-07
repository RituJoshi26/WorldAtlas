import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <div className="container">
            <div className="Logo">
            <NavLink to="/">
                        <h1>WorldAtlas</h1>
            </NavLink>
            </div>
            <div className="navbar">
            <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/country">Country</NavLink>
                    </li>
                    </ul>
            </div>

        </div>
    )
}