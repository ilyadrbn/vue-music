type SongMeta = {
    uid: string;
    name: string;
    genre: string;
    countOfComment: number;
    fileUrl: string;
};

interface IManageRules {
    required: boolean;
    alpha_spaces?: boolean;
}

interface IManageValidationSchema {
    readonly edited_name: IManageRules;
    readonly genre: IManageRules;
}

export type { SongMeta, IManageRules, IManageValidationSchema };
