import { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACK_IMG } from "../utils/constant";

const Login = () => {

    const [IsSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {

        // console.log(name.current.value);
        const message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message);

        if (message) return;

        if (!IsSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/118905221?v=4",
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(errorMessage)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    };


    const toggleSignInForm = () => {
        setIsSignIn(!IsSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img
                src={BACK_IMG}
                alt="bg-image"
                className="w-full h-full object-cover"
                />
            </div>

            <div className=" relative bg-black bg-opacity-80 w-full md:w-3/12  mx-auto p-10 h-auto my-1/2 top-48 rounded-lg">
                <h2 className="text-white font-bold text-2xl md:text-3xl mx-4">{IsSignIn ? "Sign In" : "Sign Up"}</h2>
                <div className="flex flex-col items-center justify-center">

                    <form onClick={(e) => e.preventDefault()} className="flex flex-col text-center">
                        {(!IsSignIn) && <input
                            ref={name}
                            type="text"
                            placeholder="Name"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />}
                        <input
                            ref={email}
                            type="text"
                            placeholder="Email Address"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />

                        <input
                            ref={password}
                            type="text"
                            placeholder="Password"
                            className="p-4 m-4 w-80 bg-black bg-opacity-50 rounded-md border border-gray-200 text-white"
                        />
                        <p className="text-red-500 font-bold font-sans">{errorMessage}</p>
                        <button className="p-3 m-4 w-80 text-white bg-red-700 rounded-md" onClick={handleButtonClick}>{IsSignIn ? "Sign In" : "Sign Up"}</button>
                        <p className="text-white m-4 cursor-pointer" onClick={toggleSignInForm}>{IsSignIn ? "New to Netflix? Sign up Now" : "Already a Register? Sign In"}</p>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login;
