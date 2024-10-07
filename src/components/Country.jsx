import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { CountryCard } from "./CountryCard";
import { SearchFilter } from "./SearchFilter";
export const Country=()=>{

    const[isPending,startTransition]=useTransition();
    const[countries,setCountries]=useState([]);
    const[search,setSearch]=useState();
    const[filter,setFilter]=useState("all");
    
    useEffect(()=>{
        startTransition(async()=>{
            const res = await getCountryData();
            setCountries(res.data);
        })
    },[ ])
    const searchCountries = (country) => {
        if (search) {
            // Assuming country has a 'name' property that is a string
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return true; // Return true if there's no search term
    }
    const filterRegion=(country)=>{
        if(filter==="all")return country;
        return country.region===filter;
    }
    
    if(isPending)return<h1>Loading...</h1>
    const filteredcountries = countries.filter((country)=>searchCountries(country) && filterRegion(country));
    return(
        <div className="divcountry">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
            <div className="countrycards">
                {filteredcountries.map((currCountry,index)=>{
                    return <CountryCard key={index} country={currCountry}/>
                })}

            </div>
        </div>
    )
}