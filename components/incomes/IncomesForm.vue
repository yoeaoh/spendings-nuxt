<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
import { IIncome } from '~/interfaces/income.interface';

const addNewIncome = inject<(income: IIncome) => void>(
    'addNewIncome',
    () => {},
);

const name: Ref<string> = ref('');
const sum: Ref<number | null> = ref(null);
const date: Ref<string> = ref(formatDate());

const errors: { name: string; sum: string; date: string } = reactive({
    name: '',
    sum: '',
    date: '',
});

function checkName() {
    if (name.value.length <= 1) {
        errors.name = 'Слишком короткое имя';
        return false;
    }

    errors.name = '';
    return true;
}

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
    const isNameValid = checkName();
    const isSumValid = checkSum();
    const isDateValid = checkDate();

    if (!isNameValid || !isSumValid || !isDateValid) return;

    const newIncome = {
        id: Date.now().toString(),
        name: name.value,
        sum: sum.value as number,
        date: date.value,
    };

    addNewIncome(newIncome);

    name.value = '';
    sum.value = null;
}
</script>

<template>
    <UiForm :action="addIncome" title="Добавить приход:">
        <UiFormItem title="Название" :error="errors.name">
            <input v-model="name" type="text" placeholder="Название" required />
        </UiFormItem>

        <UiFormItem title="Сумма" :error="errors.sum">
            <input
                v-model="sum"
                type="number"
                placeholder="Сумма прихода"
                required
            />
        </UiFormItem>

        <UiFormItem title="Дата" :error="errors.date">
            <input v-model="date" type="date" required />
        </UiFormItem>
    </UiForm>
</template>
