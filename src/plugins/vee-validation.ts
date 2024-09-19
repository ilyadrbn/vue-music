import {
    Form as VeeForm,
    Field as VeeField,
    defineRule,
    configure,
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
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);

        defineRule("required", required);
        defineRule("tos", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alphaSpaces);
        defineRule("alpha_num", alphaNum);
        defineRule("email", email);
        defineRule("between", between);
        defineRule("integer", integer);
        defineRule("confirmed", confirmed);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required to be filled.`,
                    min: `The field ${ctx.field} must be at least ${ctx.rule?.params} characters.`,
                    max: `The field ${ctx.field} must be less than ${ctx.rule?.params} characters.`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
                    alpha_num: `The field ${ctx.field} may only contain alphabetical characters and numbers.`,
                    email: `The field ${ctx.field} must be a valid email.`,
                    between: `The field ${ctx.field} must be at least ${
                        (ctx.rule?.params as unknown[])[0] ?? "unknown"
                    } characters and less than ${
                        (ctx.rule?.params as unknown[])[1] ?? "unknown"
                    } characters.`,
                    integer: `The field ${ctx.field} must be an integer.`,
                    confirmed: `Passwords don't match, please try again.`,
                    tos: "You must accept the Terms of Service.",
                };
                const message = messages[
                    ctx.rule?.name as keyof typeof messages
                ]
                    ? messages[ctx.rule?.name as keyof typeof messages]
                    : `Field ${ctx.field} is not valid`;
                    console.log(message);
                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
};
