import { defineStore } from "pinia";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    userCollection,
    addDoc,
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
                await addDoc(userCollection, {
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
    },
});

export { useUserStore, type IUserStore };
