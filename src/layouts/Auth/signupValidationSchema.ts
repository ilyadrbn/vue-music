import type {
    ISignupValidationShema,
    ISignupRules,
    ITermsOfService,
} from "@/interfaces/authInterfaces";

export default class SignupValidationSchema implements ISignupValidationShema {
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
    readonly tos: ITermsOfService = {
        tos: true,
    };
}
