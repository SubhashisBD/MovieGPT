import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [IsSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!IsSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
                    alt="bg-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className=" relative bg-black bg-opacity-80 w-3/12  mx-auto p-10 h-auto my-1/2 rounded-lg">
                <h2 className="text-white font-bold text-3xl mx-4">{ IsSignIn ? "Sign In" : "Sign Up"}</h2>
                <div className="flex flex-col items-center justify-center">
                    <form className="flex flex-col text-center">
                        {(!IsSignIn) && <input type="text"
                            placeholder="Name"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />}
                        <input type="text"
                            placeholder="Email Address"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />

                        <input type="text"
                            placeholder="Password"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />
                        <button className="p-3 m-4 w-80 text-white bg-red-700 rounded-md">{ IsSignIn ? "Sign In" : "Sign Up"}</button>
                        <p className="text-white m-4 cursor-pointer" onClick={toggleSignInForm}>{IsSignIn ? "New to Netflix? Sign up Now" : "Already a Register? Sign In"}</p>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login;
