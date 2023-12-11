<script lang="ts" setup>
import { type ISpendingDto } from '~/interfaces/spending.interface';
import { formatDate } from '~/helpers/date.helper';
import { DEFAULT_CATEGORY_ID } from '~/constants/categories.constants';
import { useSpendingsStore } from '~/store/spendings.store';
import { useCategoriesStore } from '~/store/categories.store';

const spendings = useSpendingsStore();
const categories = useCategoriesStore();

const sum: Ref<number | null> = ref(null);
const date: Ref<string> = ref(formatDate());
const categoryId: Ref<string> = ref(DEFAULT_CATEGORY_ID);
const description: Ref<string> = ref('');

const errors: Ref<{ sum: string; date: string }> = ref({
    sum: '',
    date: '',
});

function checkSum() {
    if (sum.value === null || sum.value <= 0) {
        errors.value.sum = 'Введите сумму';
        return false;
    }

    errors.value.sum = '';
    return true;
}

function checkDate() {
    if (!date.value) {
        errors.value.date = 'Введите дату';
        return false;
    }

    errors.value.date = '';
    return true;
}

function addSpending() {
    const isSumValid = checkSum();
    const isDateValid = checkDate();

    if (!isSumValid || !isDateValid) return;

    const newSpending: ISpendingDto = {
        id: Date.now().toString(),
        sum: sum.value as number,
        date: date.value,
        categoryId: categoryId.value,
        description: description.value,
    };

    spendings.addNewItem(newSpending);

    sum.value = null;
    description.value = '';
}
</script>

<template>
    <UiForm :action="addSpending" title="Добавить расход:">
        <UiFormItem title="Сумма" :error="errors.sum">
            <input v-model="sum" type="number" step=".01" min="0" max="9999" placeholder="Сумма расхода" required />
        </UiFormItem>

        <UiFormItem title="Дата" :error="errors.date">
            <input v-model="date" type="date" required />
        </UiFormItem>

        <UiFormItem title="Категория">
            <select v-model="categoryId">
                <option selected disabled>Выберите категорию:</option>
                <option v-for="category in categories.items" :key="category.id" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
        </UiFormItem>

        <UiFormItem title="Описание">
            <input v-model="description" type="text" placeholder="Дополнительная информация" />
        </UiFormItem>
    </UiForm>
</template>
