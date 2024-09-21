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

interface ITermsOfServiceRule {
    tos: boolean;
}

interface ISignupValidationSchema {
    readonly name: ISignupRules;
    readonly email: ISignupRules;
    readonly age: ISignupRules;
    readonly password: ISignupRules;
    readonly confirm_password: ISignupRules;
    readonly country?: ISignupRules;
    readonly tos: ITermsOfServiceRule;
}

interface ISignupFormData {
    readonly name: string;
    readonly email: string;
    readonly age: number;
    readonly password: string;
    readonly country: string | undefined;
    readonly tos: boolean;
}

export type {
    ISignupRules,
    ITermsOfServiceRule,
    ISignupValidationSchema,
    ISignupFormData,
};
