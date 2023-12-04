<script lang="ts" setup>
import { type ISpending } from '~/interfaces/spending.interface';
import SubSpendingsForm from './SubSpendingsForm.vue';

defineProps<{
    isModalOpen: Boolean;
    spending: ISpending;
}>();

defineEmits(['close']);
</script>

<template>
    <UiModal
        :isOpen="isModalOpen"
        @close="$emit('close')"
        class="spendings-card-modal"
    >
        <div class="spendings-card-modal__container">
            <SubSpendingsForm
                :spending="spending"
                class="spendings-card-modal__form"
            />

            <SpendingsCard
                :spending="spending"
                class="spendings-card-modal__card"
            />
        </div>
    </UiModal>
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
