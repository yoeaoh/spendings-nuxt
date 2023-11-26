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
    <Teleport to="body">
        <UiModal v-if="isModalOpen" @close="close">
            <SubSpendingsForm :spending="spending" />
        </UiModal>
    </Teleport>
</template>

<style lang="scss" scoped></style>
