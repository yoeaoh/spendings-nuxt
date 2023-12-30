<script lang="ts" setup>
import { type ISpending } from "~/interfaces/spending.interface";
import { useSpendingsStore } from "~/store/spendings.store";

const props = defineProps<{
    spending: ISpending;
    availableSum: number;
}>();

const spendings = useSpendingsStore();

const name: Ref<string> = ref("");
const sum: Ref<number | undefined> = ref(undefined);

const nameInput = ref();

const errors: Ref<{ name: string; sum: string }> = ref({
    name: "",
    sum: "",
});

function checkSum() {
    if (sum.value === undefined || sum.value <= 0) {
        errors.value.sum = "Введите сумму";
        return false;
    }

    errors.value.sum = "";
    return true;
}

function checkName() {
    if (!name.value) {
        errors.value.name = "Введите название";
        return false;
    }

    errors.value.name = "";
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
        category: props.spending.category,
        date: props.spending.date,
    };

    const errors = spendings.addNewSubSpending(
        props.spending,
        newSubSpending,
        props.availableSum,
    );

    if (errors) return;

    sum.value = undefined;
    name.value = "";
    nameInput.value?.input?.focus();
}
</script>

<template>
    <UiForm :action="addSubSpending" title="Добавить позицию:">
        <UiFormItem title="Остаток по чеку">
            <div>{{ availableSum }} BYN</div>
        </UiFormItem>

        <UiFormItem title="Название" :error="errors.name">
            <UInput
                ref="nameInput"
                v-model="name"
                autofocus
                type="text"
                required
                placeholder="Название продукта"
            />
        </UiFormItem>

        <UiFormItem title="Сумма" :error="errors.sum">
            <UInput
                v-model="sum"
                type="number"
                step=".01"
                min="0"
                placeholder="Стоимость продукта"
                required
            />
        </UiFormItem>
    </UiForm>
</template>
