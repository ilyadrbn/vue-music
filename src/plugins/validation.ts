import {
    Form as VeeForm,
    Field as VeeField,
    ErrorMessage as VeeError,
    defineRule,
} from "vee-validate";
import {
    required,
    min,
    max,
    alpha_spaces as alphaSpaces,
    alpha_num as alphaNum,
    email,
    between,
    integer,
    confirmed,
} from "@vee-validate/rules";
import type { App } from "vue";

export default {
    install(app: App) {
        // ? установка компонентов глобально
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("VeeError", VeeError);

        defineRule("required", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alphaSpaces);
        defineRule("alpha_num", alphaNum);
        defineRule("email", email);
        defineRule("between", between);
        defineRule("integer", integer);
        defineRule("confirmed", confirmed);
    },
};
