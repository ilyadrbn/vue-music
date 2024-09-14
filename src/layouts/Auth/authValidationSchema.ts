import type {
    IAuthValidationSchema,
    IAuthRules,
    ITermsOfService,
} from "@/interfaces/authInterfaces";

export default class AuthValidationSchema implements IAuthValidationSchema {
    readonly name: IAuthRules = {
        required: true,
        min: 3,
        max: 20,
        alpha_spaces: true,
    };
    readonly email: IAuthRules = {
        required: true,
        email: true,
    };
    readonly age: IAuthRules = {
        required: true,
        between: [18, 100],
        integer: true,
    };
    readonly password: IAuthRules = {
        required: true,
        min: 6,
        max: 20,
        alpha_num: true,
    };
    readonly confirm_password: IAuthRules = {
        required: true,
        confirmed: "@password",
    };
    readonly country?: IAuthRules = {
        required: false,
    };
    readonly tos: ITermsOfService = {
        tos: true,
    };
}
