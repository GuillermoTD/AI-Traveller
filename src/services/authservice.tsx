import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useUserStore } from "../store/Store";
import { useTripState } from '../store/Store';

export const loginWithGoogle = async () => {

    try {
        const result = await signInWithPopup(auth, provider);

        useUserStore.getState().setUser((result.user));

        const userData = result.user;
        
        localStorage.setItem("user",JSON.stringify(userData))
        
        return userData;

    } catch (error) {
        console.log("no fue posible hacer login")
        throw error;
    }
}


export const isUserLoggedVerification = ():boolean=>{
    return false;
}