import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { LogOut } from 'lucide-react';
import { toggleGptSearch } from "../utils/gptSlice";


const Header = () => {
    const dispatch = useDispatch();
    

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

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
   const  handleGptToggle = () => {
    dispatch(toggleGptSearch());
    }

    return (
        <div className=" absolute px-14 py-2 bg-gradient-to-b from-black/20 to-transparent z-20 w-screen flex justify-between">
            <img
                className="w-36"
                src={LOGO} alt="netflix_logo" />;

            {user && (<div className="flex p-2">
                <button className="bg-red-700 text-white rounded-lg px-4 py-2 mr-2" onClick={handleGptToggle}>GPT Search</button>
                 <LogOut size={48} color="#e60000" strokeWidth={3} />
                <button onClick={handleSignOut} className="text-white">(Sign Out)</button>
            </div>)}
        </div>
    );
}

export default Header;