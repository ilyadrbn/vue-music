type InputType = "text" | "number" | "password" | "checkbox";

interface IAuthMethod {
    signIn: boolean;
    signUp: boolean;
}

export type { InputType, IAuthMethod };
