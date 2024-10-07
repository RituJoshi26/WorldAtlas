import { About } from "./AboutUs";
import {Contact} from "./Contact";
import { Country } from "./Country";
export const Home=()=>{
    return(
        <>
        <div className="maindiv">
            <div className="contentdiv">
                <h1>Explore the World, One Country at a Time </h1>
                <p>Discover the history, culture, and beauty of every nation.
                    Sort,search and filter through countries to find the details you need.
                </p>
                <button>Start Exploring</button>
            </div>
            <div className="imagediv">
                <img src="/images/world.png"></img>
            </div>
        </div>
        <About/>
        <Contact/>
        <Country/>
        </>
    )
}