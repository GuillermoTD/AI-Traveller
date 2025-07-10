import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import {useUserStore} from "../store/Store";


export const loginWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup(auth, provider);
        useUserStore.getState().setUser((result.user));
        console.log(result.user);
        return result.user
        
    } catch (error) {
        console.log("no fue posible hacer login")
        throw error;
    }
}