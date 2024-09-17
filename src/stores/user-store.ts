import { defineStore } from "pinia";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    googleProvider,
    signInWithPopup,
    db,
    doc,
    setDoc,
} from "@/plugins/firebase-cfg";
import type {
    ISignupFormData,
    ISigninFormData,
} from "@/interfaces/auth-interfaces";

interface IUserStore {
    userLoggedIn: boolean;
}

const useUserStore = defineStore("userStore", {
    state(): IUserStore {
        return {
            userLoggedIn: false as boolean,
        };
    },
    actions: {
        async createUser(values: ISignupFormData): Promise<void> {
            Promise.all([
                await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password,
                ),
                await setDoc(doc(db, "users", auth.currentUser!.uid), {
                    name: values.name,
                    email: values.email,
                    age: values.age,
                    country: values.country || null,
                }),
            ]);
            this.userLoggedIn = true;
        },

        async loginUser(values: ISigninFormData): Promise<void> {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password,
            );
            this.userLoggedIn = true;
        },

        async googleAuth(): Promise<void> {
            Promise.all([
                await signInWithPopup(auth, googleProvider),
                await setDoc(doc(db, "users", auth.currentUser!.uid), {
                    name: auth.currentUser!.displayName || "Guest",
                    email: auth.currentUser!.email,
                    age: 18,
                    country: null,
                }),
            ]);
            this.userLoggedIn = true;
        },

        async signOut(): Promise<void> {
            await auth.signOut();
            this.userLoggedIn = false;
        },
    },
});

export { useUserStore, type IUserStore };
