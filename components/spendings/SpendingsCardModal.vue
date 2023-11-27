<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';
import SubSpendingsForm from './SubSpendingsForm.vue';

defineProps<{
    isModalOpen: Boolean;
    spending: ISpending;
}>();

defineEmits(['close']);
</script>

<template>
    <UiModal :isOpen="isModalOpen" @close="$emit('close')">
        <SubSpendingsForm :spending="spending" />
    </UiModal>
</template>

<style lang="scss" scoped></style>
