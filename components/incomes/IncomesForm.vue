<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
import { useIncomesStore } from '~/store/incomes.store';

const incomes = useIncomesStore();

const name: Ref<string> = ref('');
const sum: Ref<number | null> = ref(null);
const date: Ref<string> = ref(formatDate());

const errors: { sum: string; date: string } = reactive({
    sum: '',
    date: '',
});

function checkSum() {
    if (sum.value === null || sum.value <= 0) {
        errors.sum = 'Введите сумму';
        return false;
    }

    errors.sum = '';
    return true;
}

function checkDate() {
    if (!date.value) {
        errors.date = 'Введите Дату';
        return false;
    }

    errors.date = '';
    return true;
}

function addIncome() {
    const isSumValid = checkSum();
    const isDateValid = checkDate();

    if (!isSumValid || !isDateValid) return;

    const newIncome = {
        id: Date.now().toString(),
        name: name.value,
        sum: sum.value as number,
        date: date.value,
    };

    incomes.addNewItem(newIncome);

    name.value = '';
    sum.value = null;
}
</script>

<template>
    <UiForm :action="addIncome" title="Добавить приход:">
        <UiFormItem title="Сумма" :error="errors.sum">
            <input
                v-model="sum"
                type="number"
                placeholder="Сумма прихода"
                required
            />
        </UiFormItem>

        <UiFormItem title="Название">
            <input v-model="name" type="text" placeholder="Название" />
        </UiFormItem>

        <UiFormItem title="Дата" :error="errors.date">
            <input v-model="date" type="date" required />
        </UiFormItem>
    </UiForm>
</template>
