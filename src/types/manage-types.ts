interface ISongMeta {
    uid: string;
    name: string;
    artist?: string;
    genre?: string;
    countOfComment: number;
    fileUrl: string;
}

interface IManageRules {
    required: boolean;
    alpha_spaces?: boolean;
}

interface IManageValidationSchema {
    readonly edited_name: IManageRules;
    readonly genre: IManageRules;
    readonly artist: IManageRules;
}

export type { ISongMeta, IManageRules, IManageValidationSchema };
