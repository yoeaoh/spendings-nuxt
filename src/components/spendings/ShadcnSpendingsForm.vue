<script setup lang="ts">
import { h } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

import { format } from "date-fns";
import { cn } from "~/lib/utils";
import { toast } from "@/components/ui/toast";

const formSchema = toTypedSchema(
    z.object({
        sum: z.number().positive().max(10000),
        description: z.string().min(0).max(100).optional(),
    }),
);

const { handleSubmit } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit((values: any) => {
    toast({
        title: "You submitted the following values:",
        description: h(
            "pre",
            { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
            h("code", { class: "text-white" }, JSON.stringify(values, null, 2)),
        ),
    });
});
</script>

<template>
    <Card>
        <CardHeader>Добавить расход</CardHeader>

        <CardContent>
            <form class="space-y-6" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="sum">
                    <FormItem v-auto-animate>
                        <FormLabel>Сумма</FormLabel>

                        <FormControl>
                            <Input
                                type="number"
                                placeholder="Сумма расхода"
                                v-bind="componentField"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField, value }" name="dob">
                    <FormItem class="flex flex-col">
                        <FormLabel>Дата</FormLabel>

                        <Popover>
                            <PopoverTrigger as-child>
                                <FormControl>
                                    <Button
                                        variant="secondary"
                                        :class="
                                            cn(
                                                'ps-3 text-start font-normal',
                                                !value &&
                                                    'text-muted-foreground',
                                            )
                                        "
                                    >
                                        <span>
                                            {{
                                                value
                                                    ? format(value, "PPP")
                                                    : "Выберите дату"
                                            }}
                                        </span>

                                        <Icon
                                            name="lets-icons:calendar-light"
                                            class="ms-auto h-4 w-4 opacity-50"
                                        />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent class="p-0">
                                <Calendar v-bind="componentField" />
                            </PopoverContent>
                        </Popover>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="description">
                    <FormItem v-auto-animate>
                        <FormLabel>Описание</FormLabel>

                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Дополнительная информация"
                                v-bind="componentField"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button type="submit">Добавить</Button>
            </form>
        </CardContent>
    </Card>
</template>
