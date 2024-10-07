import { useParams } from "react-router-dom";
import { useTransition, useState, useEffect } from "react";
import { getSingleCountryData } from "../api/PostApi";

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();

    useEffect(() => {
        startTransition(async () => {
            const res = await getSingleCountryData(params.id);
            console.log(res.data[0]);
            setCountry(res.data[0]);
        });
    }, [params.id]); // Add params.id as a dependency

    if (isPending) return <h1>Loading...</h1>;


    return (
        country && (
            
            <div className="countrysection">
            <div className="singlecountrydiv">
                <div className="singlecountryimage">
                   <img src={country.flags.svg}/>
                </div>
                <div className="countrycontent">
                    <h1>{country.name.common}</h1>
             <p>
                <span className="card-description">Official: </span>
                {country.name.official}
             </p>
             <p>
                <span className="card-description">Capital: </span>
                {country.capital}
             </p>
             <p>
                <span className="card-description">Region: </span>
                {country.region}
             </p>
             <p>
                <span className="card-description">Sub-Region: </span>
                {country.subregion}
             </p>
             <p>
                <span className="card-description">Population: </span>
                {country.population}
             </p>
             <p>
             
             <span className="card-description">Currency: </span>
{country.currencies && Object.values(country.currencies)[0] && (
    <>
        {Object.values(country.currencies)[0].name} ,
        <span> {Object.values(country.currencies)[0].symbol}</span>
    </>
)}
</p>

             {country.borders && country.borders.length > 0 && (
             <p>
                <span className="card-description">Borders: </span>
                {country.borders.join(', ')}
            </p>
)}



                </div>
            </div>
            </div>
        )
    );
};
