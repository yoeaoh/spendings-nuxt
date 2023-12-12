<script lang="ts" setup>
import {
    type ISpending,
    type ISubSpending,
} from "~/interfaces/spending.interface";
import { useSpendingsStore } from "~/store/spendings.store";

const props = defineProps<{
    spending: ISpending;
    availableSum: number;
}>();

const spendings = useSpendingsStore();

const name: Ref<string> = ref("");
const sum: Ref<number | null> = ref(null);

const nameInput: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
    nameInput.value?.focus();
});

const errors: Ref<{ name: string; sum: string }> = ref({
    name: "",
    sum: "",
});

function checkSum() {
    if (sum.value === null || sum.value <= 0) {
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
    };

    const errors = spendings.addNewSubSpending(
        props.spending,
        newSubSpending,
        props.availableSum,
    );

    if (errors) return;

    sum.value = null;
    name.value = "";
    nameInput.value?.focus();
}
</script>

<template>
    <UiForm :action="addSubSpending" title="Добавить позицию:">
        <UiFormItem title="Остаток по чеку">
            <div>{{ availableSum }} BYN</div>
        </UiFormItem>

        <UiFormItem title="Название" :error="errors.name">
            <input
                v-model="name"
                type="text"
                required
                ref="nameInput"
                placeholder="Название продукта"
            />
        </UiFormItem>

        <UiFormItem title="Сумма" :error="errors.sum">
            <input
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
