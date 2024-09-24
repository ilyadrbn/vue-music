interface ICommentRules {
    required: boolean;
    min: number;
}

interface ICommentValidationSchema {
    readonly comment: ICommentRules;
}

interface IComment {
    userName: string;
    createdAt: Date;
    comment: string;
}

export type { ICommentRules, ICommentValidationSchema, IComment };
