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
        <SubSpendingsForm
            :spending="spending"
            class="spendings-card-modal__form"
        />

        <SpendingsCard
            :spending="spending"
            class="spendings-card-modal__card"
        />
    </UiModal>
</template>

<style lang="scss" scoped>
.spendings-card-modal {
    display: flex;
    gap: 1rem;
}
</style>
