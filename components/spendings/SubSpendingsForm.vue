<script lang="ts" setup>
import { ISpending, ISubSpending } from '~/interfaces/spending.interface';

const props = defineProps<{
    spending: ISpending;
}>();

const addNewSubSpending = inject<
    (spending: ISpending, subSpending: ISubSpending) => string
>('addNewSubSpending', () => '');

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

function addSubSpending() {
    const isNameValid = checkName();
    const isSumValid = checkSum();

    if (!isNameValid || !isSumValid) return;
    if (!props.spending) return;

    if (!sum.value) return;

    const newSubSpending = {
        id: `subSpending${Date.now().toString()}`,
        name: name.value,
        sum: sum.value,
    };

    const error = addNewSubSpending(props.spending, newSubSpending);
    errors.name = error;

    sum.value = null;
    name.value = '';
}
</script>

<template>
    <UiForm :action="addSubSpending" title="Добавить трату:">
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
