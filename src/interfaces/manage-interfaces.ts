type SongMeta = {
    uid: string;
    name: string;
    genre: string;
    countOfComment: number;
    fileUrl: string;
};

interface IManageRules {
    required?: boolean;
    min?: number;
    max?: number;
    alpha_spaces?: boolean;
}

interface IManageValidationSchema {
    readonly name: IManageRules;
}

export type { SongMeta, IManageRules, IManageValidationSchema };
