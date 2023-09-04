
import Header from "../components/Header";
import { useState } from "react";
import {Link} from "react-router-dom";



const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

const toggleSignInForm = () =>{
  setIsSignIn(!isSignIn);
}

  return (
    <div>
      <Header />
      <div className="bg-overlap">
        <div className="signin-form">
        <h1> {isSignIn ? "Sign In" : "Sign Up"}</h1>
        <form className="text-white ">
        {!isSignIn && <input type="text" placeholder="Enter Full Name" />}
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>{isSignIn ? "Sign In" : "Sign Up"}</button>
        </form>
        <div class="login-signup-now">
         {isSignIn ? "New to Netflix?" : "Already registed?"} 
          <Link className="ml-2" to="" onClick={toggleSignInForm}>{isSignIn ? "Sign Up Now": "Sign In"}</Link> 
          .
        </div>
        </div>
    
      </div>
    </div>
  );
};

export default Login;
