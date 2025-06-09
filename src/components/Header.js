import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


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

        // unsubscribeing when component unmounts.
        return () => unsubscribe();
    }, [])


    return (
        <div className=" relative px-14 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img
                className="w-52"
                src={LOGO} alt="netflix_logo" />;

            {user && (<div className="flex p-2">
                <img className="w-12 h-12 " src={user.photoURL} alt="User-Picture" />
                <button onClick={handleSignOut}>(Sign Out)</button>
            </div>)}
        </div>
    );
}

export default Header;