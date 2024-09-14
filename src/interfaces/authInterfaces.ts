interface IAuthMethod {
    signIn: boolean;
    signUp: boolean;
}

type InputType = "text" | "number" | "password";

interface ISignupRules {
    required: boolean;
    min?: number;
    max?: number;
    alpha_spaces?: boolean;
    alpha_num?: boolean;
    email?: boolean;
    between?: number[];
    integer?: boolean;
    confirmed?: string;
}

interface ISignupValidationShema {
    readonly name: ISignupRules;
    readonly email: ISignupRules;
    readonly age: ISignupRules;
    readonly password: ISignupRules;
    readonly confirm_password: ISignupRules;
    readonly country?: ISignupRules;
}

export type {
    IAuthMethod,
    ISignupValidationShema,
    ISignupRules,
    InputType,
};
