import type {
    IManageRules,
    IManageValidationSchema,
} from "@/types/manage-types";

class ManageValidationSchema implements IManageValidationSchema {
    readonly edited_name: IManageRules = {
        required: true,
    };
    readonly genre: IManageRules = {
        required: false,
        alpha_spaces: true,
    };
    readonly artist: IManageRules = {
        required: false,
    };
}

export { ManageValidationSchema };
