import { NavLink } from "react-router-dom";
export const CountryCard=({country},{key})=>{
    return <div className="countrysinglecard">
        <div className="countrycardcontainer">
            <div className="countryimage">

                <img src={country.flags.svg}/>
            </div>
            <p className="country-title">{country.name.common}</p>
            <p>
                <span className="card-description">Capital: </span>
                {country.capital}
             </p>
             <p>
                <span className="card-description">Population: </span>
                {country.population}
             </p>
             <p>
                <span className="card-description">Region: </span>
                {country.region}
             </p>
             <NavLink to={`/country/${country.name.common}`} className="countrylink">
             Read More
             </NavLink>
        </div>
    </div>
}