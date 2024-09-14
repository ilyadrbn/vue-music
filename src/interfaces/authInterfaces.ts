interface IAuthMethod {
    signIn: boolean;
    signUp: boolean;
}

type InputType = "text" | "number" | "password";

interface IAuthRules {
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

interface IAuthValidationSchema {
    readonly name: IAuthRules;
    readonly email: IAuthRules;
    readonly age: IAuthRules;
    readonly password: IAuthRules;
    readonly confirm_password: IAuthRules;
    readonly country?: IAuthRules;
    readonly tos: ITermsOfService;
}

interface ITermsOfService {
    tos: boolean;
}

export type {
    IAuthMethod,
    IAuthValidationSchema,
    IAuthRules,
    ITermsOfService,
    InputType
};
