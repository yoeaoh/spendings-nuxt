<script lang="ts" setup>
import { ISpending, ISubSpendingDto } from '~/interfaces/spending.interface';

const updateSubSpendings = inject<(subSpendingDto: ISubSpendingDto) => void>(
    'updateSubSpendings',
    () => {},
);

const spendingId = inject('spendingCardModalSpendingId', null);

const name: Ref<string> = ref('');
const sum: Ref<number | null> = ref(null);

const errors: { name: string; sum: string } = reactive({
    name: '',
    sum: '',
});

function checkSum() {
    if (sum.value === null || sum.value <= 0) {
        errors.sum = 'Введите сумму';
        return false;
    }

    errors.sum = '';
    return true;
}

function checkName() {
    if (!name.value) {
        errors.name = 'Введите название';
        return false;
    }

    errors.name = '';
    return true;
}

function addSpending() {
    const isNameValid = checkName();
    const isSumValid = checkSum();

    if (!isNameValid || !isSumValid) return;
    if (spendingId === null) return;

    const newSubSpending: ISubSpendingDto = {
        id: Date.now().toString(),
        spendingId: spendingId,
        name: name.value as string,
        sum: sum.value as number,
    };

    updateSubSpendings(newSubSpending);

    sum.value = null;
    name.value = '';
}
</script>

<template>
    <UiForm :action="addSpending" title="Добавить трату:">
        <UiFormItem title="Название" :error="errors.name">
            <input v-model="name" type="text" required />
        </UiFormItem>

        <UiFormItem title="Сумма" :error="errors.sum">
            <input
                v-model="sum"
                type="number"
                step=".01"
                min="0"
                placeholder="Сумма траты"
                required
            />
        </UiFormItem>
    </UiForm>
</template>
