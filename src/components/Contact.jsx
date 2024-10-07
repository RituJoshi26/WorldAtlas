import { useState } from "react";
export const Contact=()=>{
    const [inputvalue,setInputValue]=useState({
        username:"",
        email:"",
        message:""
    });
    const handleFormInput=(e)=>{
        const {name,value}=e.target;
        setInputValue((prev)=>({...prev,[name]:value}));
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(inputvalue);
        setInputValue({
            username: "",
            email: "",
            message: ""
        });
    }   
    return(
        <div className="contactdiv">
            <div className="contacttitle">
                <h1>Contact Us</h1>
            </div>
            <div className="formdiv">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={handleFormInput} value={inputvalue.username} required autoComplete="false" placeholder="Enter your Name"
                    name="username"></input>
                    <input type="email" onChange={handleFormInput} value={inputvalue.email} required autoComplete="false" placeholder="Enter your Email"
                    name="email"></input>
                    <textarea type="text" onChange={handleFormInput} value={inputvalue.message} required autoComplete="false" placeholder="Enter your message"
                    name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
                </div>

        </div>
    )
}