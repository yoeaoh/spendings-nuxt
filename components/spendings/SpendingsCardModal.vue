<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';
import SubSpendingsForm from './SubSpendingsForm.vue';

defineProps<{
    isModalOpen: Boolean;
    spending: ISpending;
}>();

const emit = defineEmits(['close']);

function close() {
    emit('close');
}
</script>

<template>
    <UiModal 
        :isOpen="isModalOpen" 
        @close="close"
    >
        <SubSpendingsForm :spending="spending" />
    </UiModal>
</template>

<style lang="scss" scoped></style>
