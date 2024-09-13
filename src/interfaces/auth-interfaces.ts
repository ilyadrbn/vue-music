interface IAuthMethod {
    signIn: boolean;
    signUp: boolean;
}

interface IRules {
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

interface IValidationShema {
    readonly name: IRules;
    readonly email: IRules;
    readonly age: IRules;
    readonly password: IRules;
    readonly confirm_password: IRules;
    readonly country?: IRules;
    readonly tos?: IRules;
}

export type { IAuthMethod, IValidationShema, IRules };
