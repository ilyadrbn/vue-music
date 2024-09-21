import type { ISignupRules } from "./signup-types";

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

interface ISigninFormData {
    readonly email: string;
    readonly password: string;
}

export type { ISigninRules, ISigninValidationSchema, ISigninFormData };
