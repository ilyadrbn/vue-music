import type {
    ICommentRules,
    ICommentValidationSchema,
} from "@/types/comments-types";

class CommentValidationSchema implements ICommentValidationSchema {
    readonly comment: ICommentRules = {
        required: true,
        min: 3,
    };
}

export { CommentValidationSchema };
