<script lang="ts" setup>
const isModalVisible: Boolean = inject('isSpendingCardModalOpen', false);
const closeModal = inject<() => void>('closeModal', () => {});

import SubSpendingsForm from './SubSpendingsForm.vue';
</script>

<template>
    <Teleport to="body">
        <UiModal v-if="isModalVisible" @close="closeModal">
            <SubSpendingsForm />
        </UiModal>
    </Teleport>
</template>

<style lang="scss" scoped></style>
