type InputType = "text" | "number" | "password";

interface IAuthMethod {
    signIn: boolean;
    signUp: boolean;
}

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

interface ISignupValidationSchema {
    readonly name: ISignupRules;
    readonly email: ISignupRules;
    readonly age: ISignupRules;
    readonly password: ISignupRules;
    readonly confirm_password: ISignupRules;
    readonly country?: ISignupRules;
    readonly tos: ITermsOfService;
}

interface ISigninRules {
    required: boolean;
    min?: number;
    max?: number;
    alpha_num?: boolean;
    email?: boolean;
}

interface ISigninValidationSchema {
    readonly email: ISignupRules;
    readonly password: ISigninRules;
}

interface ITermsOfService {
    tos: boolean;
}

interface ISignupFormData {
    readonly name: string;
    readonly email: string;
    readonly age: number;
    readonly password: string;
    readonly country: string | undefined;
    readonly tos: boolean;
}
interface ISigninFormData {
    readonly email: string;
    readonly password: string;
}

export type {
    InputType,
    IAuthMethod,
    ISignupValidationSchema,
    ISignupRules,
    ITermsOfService,
    ISigninRules,
    ISigninValidationSchema,
    ISignupFormData,
    ISigninFormData,
};
