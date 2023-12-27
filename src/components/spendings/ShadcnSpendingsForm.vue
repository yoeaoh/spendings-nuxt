<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

import { format } from "date-fns";
import { cn } from "~/lib/utils";

import { type ISpendingDto } from "~/interfaces/spending.interface";
import { DEFAULT_CATEGORY_ID } from "~/constants/categories.constants";
import { useSpendingsStore } from "~/store/spendings.store";
import { useCategoriesStore } from "~/store/categories.store";

const spendings = useSpendingsStore();
const categories = useCategoriesStore();

const formSchema = toTypedSchema(
    z.object({
        sum: z.number().positive().max(10000),
        date: z.date(),
        categoryId: z.string().default(DEFAULT_CATEGORY_ID),
        name: z.string().min(0).max(100).optional(),
    }),
);

const { handleSubmit } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit((values: any) => {
    console.log(values);
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
                                step=".01"
                                placeholder="Сумма расхода"
                                required
                                v-bind="componentField"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField, value }" name="date">
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

                <FormField v-slot="{ componentField }" name="categoryId">
                    <FormItem>
                        <FormLabel>Категория</FormLabel>

                        <Select v-bind="componentField">
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder="Select a verified email to display"
                                    />
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem
                                        v-for="category in categories.items"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        {{ category.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="name">
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
