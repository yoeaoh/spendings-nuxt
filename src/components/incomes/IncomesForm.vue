<script lang="ts" setup>
import { formatDate } from "~/helpers/date.helper";
import { useIncomesStore } from "~/store/incomes.store";

const incomes = useIncomesStore();

const name: Ref<string> = ref("");
const sum: Ref<number | undefined> = ref(undefined);
const date: Ref<string> = ref(formatDate());

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
        errors.value.date = "Введите Дату";
        return false;
    }

    errors.value.date = "";
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

    name.value = "";
    sum.value = undefined;
}
</script>

<template>
    <UiForm :action="addIncome" title="Добавить доход:">
        <UiFormItem title="Сумма" :error="errors.sum">
            <UInput
                v-model="sum"
                type="number"
                placeholder="Сумма дохода"
                required
            />
        </UiFormItem>

        <UiFormItem title="Название">
            <UInput v-model="name" type="text" placeholder="Название" />
        </UiFormItem>

        <UiFormItem title="Дата" :error="errors.date">
            <UInput v-model="date" type="date" required />
        </UiFormItem>
    </UiForm>
</template>
