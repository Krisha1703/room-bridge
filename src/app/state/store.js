import {create} from "zustand";

const useUserStore = create((set) => ({
  firstname: "", // Initial username state
  lastname: "",
  email: "",
  role: "",

  setFirstName: (fname) => set({ firstname: fname }), 
  setLastName: (lname) => set({ lastname: lname }),
  setEmail: (mail) => set({ email: mail }),
  setRole: (user) => set({ role: user }),
}));

export default useUserStore;
