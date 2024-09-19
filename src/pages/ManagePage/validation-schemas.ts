import type {
    IManageRules,
    IManageValidationSchema,
} from "@/interfaces/manage-interfaces";

class ManageValidationSchema implements IManageValidationSchema {
    readonly name: IManageRules = {
        required: false,
        min: 3,
        max: 20,
        alpha_spaces: true,
    };
}

export { ManageValidationSchema };
