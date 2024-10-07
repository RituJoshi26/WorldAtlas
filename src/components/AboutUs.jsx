import countryFacts from "../api/country.json";
export const About=()=>{
    return(
       <div className="aboutcontainer">
        <div className="abouttitle">
            <h1>Here are some interesting facts <br/>we're proud of</h1>
        </div>
        <div className="cards">
            {countryFacts.map((countrydata)=>{
                const {id,capital,country,fact,population}=countrydata
                return(
                    <div className="card" key={id}>
                    <div className="cardcontainer">
                        <p className="card-title">{country}</p>
                        <p>
                            <span className="card-description">Capital: </span>
                            {capital}
                        </p>
                        <p>
                            <span className="card-description">Population: </span>
                            {population}
                        </p>
                        <p>
                            <span className="card-description">Interesting Fact: </span>
                            {fact}
                        </p>
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    )
}