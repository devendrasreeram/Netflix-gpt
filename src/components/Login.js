import { checkValidationData } from "../utilities/Validation";
import Header from "./Header";
import { useRef, useState } from "react";
const Login = () =>{

    const [isSignIn, setISSIgnIn]=useState(true);
    const [errorMessage, setErrorMessage]=useState(null);

    const email =useRef(null);
    const password =useRef(null);

const handleButtonClick =  (e) => {
    e.preventDefault()

    const Message = checkValidationData(email.current.value,password.current.value);
    setErrorMessage(Message);
}


const toggleSignInForm=() =>{
    setISSIgnIn(!isSignIn);

}

    return (
        <div>
           <Header/>
           <div className="absolute">
           <img 
           src ="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
              alt="Netflix Background Logo" />   
        </div>
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

            {!isSignIn && <input type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"/>}

            <input
            ref={email}
             type="text" 
            placeholder="Email or phone Number" 
            className="p-4 my-4 w-full bg-gray-700"/>

            <input 
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-700"/>

            <p className="font-bold text-red-500">{errorMessage}</p>

            <button type="submit" 
            className="p-6 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" 
            onClick={toggleSignInForm}>
            {isSignIn ? "New to Netflix?Sign up now." : "Alreadt Registered!Sign In now."}</p>
        </form>
    </div>
    )
};

export default Login;