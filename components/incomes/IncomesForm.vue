<template>
    <UiForm :action="addIncome" title="Добавить приход:">
        <UiFormItem title="Название">
            <input v-model="name" type="text" placeholder="Название" />
        </UiFormItem>

        <UiFormItem title="Сумма">
            <input v-model="sum" type="number" placeholder="Сумма прихода" />
        </UiFormItem>

        <UiFormItem title="Дата">
            <input v-model="date" type="date" />
        </UiFormItem>
    </UiForm>
</template>

<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
const emit = defineEmits(['addIncome']);

const name: Ref<string> = ref('');
const sum: Ref<number | null> = ref(null);
const date: Ref<string> = ref(formatDate());

const isSumValid: Ref<Boolean> = ref(true);

const checkSum = () => {
    if (sum.value === null || sum.value <= 0) {
        isSumValid.value = false;
        return false;
    }

    isSumValid.value = true;
    return true;
};

const addIncome = () => {
    if (!checkSum()) return;

    emit('addIncome', {
        id: Date.now().toString(),
        sum: sum.value,
        date: date.value,
    });

    name.value = '';
    sum.value = null;
};
</script>
