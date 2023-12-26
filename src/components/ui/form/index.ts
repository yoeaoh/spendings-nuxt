import { type InjectionKey } from "vue";

export { Form, Field as FormField } from "vee-validate";
export { default as FormItem } from "./FormItem.vue";
export { default as FormLabel } from "./FormLabel.vue";
export { default as FormControl } from "./FormControl.vue";
export { default as FormMessage } from "./FormMessage.vue";
export { default as FormDescription } from "./FormDescription.vue";

export const FORM_ITEM_INJECTION_KEY = Symbol(
    "FORM_ITEM_INJECTION_KEY",
) as InjectionKey<string>;
