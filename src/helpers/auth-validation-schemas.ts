import type {
    ISignupValidationSchema,
    ISignupRules,
    ITermsOfServiceRule,
} from "@/types/signup-types";

import type {
    ISigninValidationSchema,
    ISigninRules,
} from "@/types/signin-types";

class SignupValidationSchema implements ISignupValidationSchema {
    readonly name: ISignupRules = {
        required: true,
        min: 3,
        max: 20,
        alpha_spaces: true,
    };
    readonly email: ISignupRules = {
        required: true,
        email: true,
    };
    readonly age: ISignupRules = {
        required: true,
        between: [18, 100],
        integer: true,
    };
    readonly password: ISignupRules = {
        required: true,
        min: 6,
        max: 20,
        alpha_num: true,
    };
    readonly confirm_password: ISignupRules = {
        required: true,
        confirmed: "@password",
    };
    readonly country?: ISignupRules = {
        required: false,
    };
    readonly tos: ITermsOfServiceRule = {
        tos: true,
    };
}

class SigninValidationSchema implements ISigninValidationSchema {
    readonly email: ISigninRules = {
        required: true,
        email: true,
    };
    readonly password: ISigninRules = {
        required: true,
        min: 6,
        max: 20,
        alpha_num: true,
    };
}

export { SignupValidationSchema, SigninValidationSchema };
