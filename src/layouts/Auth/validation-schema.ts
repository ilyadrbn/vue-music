import type { IValidationShema, IRules } from "@/interfaces/auth-interfaces";

export default class ValidationShema implements IValidationShema {
    readonly name: IRules = {
        required: true,
        min: 3,
        max: 20,
        alpha_spaces: true,
    };
    readonly email: IRules = {
        required: true,
        email: true,
    };
    readonly age: IRules = {
        required: true,
        between: [18, 100],
        integer: true,
    };
    readonly password: IRules = {
        required: true,
        min: 6,
        max: 20,
        alpha_num: true,
    };
    readonly confirm_password: IRules = {
        required: true,
        confirmed: "@password",
    };
    readonly country?: IRules = {
        required: false,
    };
    readonly tos: IRules = {
        required: true,
    };
}
