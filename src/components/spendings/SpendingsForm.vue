<script lang="ts" setup>
import { type ISpending } from "~/interfaces/spending.interface";
import { formatDate } from "~/helpers/date.helper";
import { DEFAULT_CATEGORY } from "~/constants/categories.constants";
import { useSpendingsStore } from "~/store/spendings.store";
import { useCategoriesStore } from "~/store/categories.store";
import type { ICategory } from "~/interfaces/category.interface";

const spendingsStore = useSpendingsStore();
const categoriesStore = useCategoriesStore();

const { items: spendings } = storeToRefs(spendingsStore);
const { addNewItem } = spendingsStore;

const { items: categories } = storeToRefs(categoriesStore);

const sum: Ref<number | undefined> = ref(undefined);
const date: Ref<string> = ref(formatDate());
const category: Ref<ICategory> = ref(DEFAULT_CATEGORY);
const name: Ref<string> = ref("");

const errors: Ref<{ sum: string; date: string }> = ref({
    sum: "",
    date: "",
});

function checkSum() {
    if (sum.value === undefined || sum.value <= 0) {
        errors.value.sum = "Введите сумму";
        return false;
    }

    errors.value.sum = "";
    return true;
}

function checkDate() {
    if (!date.value) {
        errors.value.date = "Введите дату";
        return false;
    }

    errors.value.date = "";
    return true;
}

function addSpending() {
    const isSumValid = checkSum();
    const isDateValid = checkDate();

    if (!isSumValid || !isDateValid) return;

    const newSpending: ISpending = {
        id: Date.now().toString(),
        sum: sum.value as number,
        date: date.value,
        category: category.value,
        name: name.value,
    };

    addNewItem(newSpending);

    sum.value = undefined;
    name.value = "";
}
</script>

<template>
    <UiForm :action="addSpending" title="Добавить расход:">
        <UiFormItem title="Сумма" :error="errors.sum">
            <UInput
                v-model="sum"
                type="number"
                step=".01"
                min="0"
                max="9999"
                placeholder="Сумма расхода"
                required
            />
        </UiFormItem>

        <UiFormItem title="Дата" :error="errors.date">
            <UInput v-model="date" type="date" required />
        </UiFormItem>

        <UiFormItem title="Категория">
            <USelectMenu
                v-model:model-value="category"
                searchable
                placeholder="Выберите категорию:"
                :options="categories"
                option-attribute="name"
                :search-attributes="['name']"
            />
        </UiFormItem>

        <UiFormItem title="Описание">
            <UInput
                v-model="name"
                type="text"
                placeholder="Дополнительная информация"
            />
        </UiFormItem>
    </UiForm>
</template>
