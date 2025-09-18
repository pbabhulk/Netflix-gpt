import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="netflix-logo"
        />
      </div>
      <form className="bg-black w-3/12 p-6 absolute top-0 right-0 left-0 my-44 mx-auto rounded-lg bg-opacity-80">
        <p className="text-3xl text-white font-bold p-1 py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            className="p-2 my-3 w-full bg-gray-700"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          className="p-2 my-3 w-full bg-gray-700"
          placeholder="Email address"
          type="text"
        />
        <input
          className="p-2 my-3 w-full bg-gray-700"
          placeholder="Password"
          type="password"
        />
        <button className="p-2 my-6 bg-red-600 text-white font-bold w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="text-white p-2 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
