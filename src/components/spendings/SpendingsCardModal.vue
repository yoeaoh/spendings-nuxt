<script lang="ts" setup>
import SubSpendingsForm from "./SubSpendingsForm.vue";
import { type ISpending } from "~/interfaces/spending.interface";

defineProps<{
    isModalOpen: Boolean;
    spending: ISpending;
    availableSum: number;
}>();

defineEmits(["close"]);
</script>

<template>
    <div class="spendings-card-modal">
        <UiModal :is-open="isModalOpen" @close="$emit('close')">
            <div class="spendings-card-modal__container">
                <SubSpendingsForm
                    :spending="spending"
                    :available-sum="availableSum"
                    class="spendings-card-modal__form"
                />

                <SpendingsCard
                    :spending="spending"
                    class="spendings-card-modal__card"
                />
            </div>
        </UiModal>
    </div>
</template>

<style lang="scss" scoped>
.spendings-card-modal {
    &__container {
        display: flex;
        gap: 1rem;
        width: 40rem;
        align-items: flex-start;
    }

    &__form {
        flex-grow: 0;
    }

    &__card {
        flex-grow: 1;
        pointer-events: none;
    }
}
</style>
