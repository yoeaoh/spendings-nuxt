<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
import { ICategory } from '~/interfaces/category.interface';

const emit = defineEmits(['addSpending']);

const props = defineProps<{
    categories: ICategory[];
}>();

const sum: Ref<number | null> = ref(null);
const date: Ref<string> = ref(formatDate());
const categoryId: Ref<string> = ref(props.categories[0].id);
const description: Ref<string> = ref('');

const isSumValid: Ref<Boolean> = ref(true);

const checkSum = () => {
    if (sum.value === null || sum.value <= 0) {
        isSumValid.value = false;
        return false;
    }

    isSumValid.value = true;
    return true;
};

const addSpending = () => {
    if (!checkSum()) return;

    emit('addSpending', {
        id: Date.now().toString(),
        sum: sum.value,
        date: date.value,
        categoryId: categoryId.value,
        description: description.value,
    });

    sum.value = null;
    description.value = '';
};
</script>

<template>
    <UiForm :action="addSpending" title="Добавить трату:">
        <UiFormItem title="Сумма">
            <input
                v-model="sum"
                type="number"
                step=".01"
                placeholder="Сумма траты"
            />
        </UiFormItem>

        <UiFormItem title="Дата">
            <input v-model="date" type="date" />
        </UiFormItem>

        <UiFormItem title="Категория">
            <select v-model="categoryId">
                <option selected disabled>Выберите категорию:</option>
                <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
        </UiFormItem>

        <UiFormItem title="Описание">
            <input
                v-model="description"
                type="text"
                placeholder="Дополнительная информация"
            />
        </UiFormItem>
    </UiForm>
</template>
