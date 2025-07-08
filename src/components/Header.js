import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { LogOut } from 'lucide-react';
import { toggleGptSearch } from "../utils/gptSlice";
import { changelanguage } from "../utils/configSlice";


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const isGpt = useSelector((store) => store.gpt.gptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                navigate("/error");
            });

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // *unsubscribeing when component unmounts.

        return () => unsubscribe();
    }, [])

    // *GPT TOGGLE FUNCTION
    const handleGptToggle = () => {
        dispatch(toggleGptSearch());
    }

    const handleLanguageChange = (e) => {
        dispatch(changelanguage(e.target.value));
    }

    return (
        <div className=" absolute px-14 py-2 bg-gradient-to-b from-black to-transparent z-20 w-screen flex justify-between flex-col md:flex-row">
            <img
                className="w-36 mx-auto md:mx-0"
                src={LOGO} alt="netflix_logo " />;

            {user &&
                (<div className="flex p-2 justify-between items-center">
                    <div className="w-32">
                        {isGpt && (
                            <select className="p-2 bg-gray-900 text-white" onChange={(e) => handleLanguageChange(e)}>
                                {SUPPORTED_LANGUAGE.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                                ))}
                            </select>
                        )}
                    </div>

                    <button className="bg-red-700 text-white rounded-lg px-3 md:px-3 py-3 md:py-2" onClick={handleGptToggle}>
                        {isGpt ? "Homepage" : "GPT Search"}
                    </button>

                    <div className="flex items-center w-32 justify-end">
                        <LogOut className="hidden md:block mr-2" size={48} color="#e60000" strokeWidth={3} />
                        <button onClick={handleSignOut} className="text-white">(Sign Out)</button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Header;