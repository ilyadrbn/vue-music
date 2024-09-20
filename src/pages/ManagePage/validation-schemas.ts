import type {
    IManageRules,
    IManageValidationSchema,
} from "@/interfaces/manage-interfaces";

class ManageValidationSchema implements IManageValidationSchema {
    readonly edited_name: IManageRules = {
        required: true,
    };
    readonly genre: IManageRules = {
        required: false,
        alpha_spaces: true,
    };
}

export { ManageValidationSchema };
