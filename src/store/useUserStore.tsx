// src/store/useUserStore.js
import { create } from 'zustand';
import type { User } from "firebase/auth"; //Este es un tipo proveido por firebase con los campos que se devuelven al autenticar un usuario

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
  }

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user:User) => set({ user }),
  clearUser: () => set({ user: null }),
}));


export default useUserStore;
