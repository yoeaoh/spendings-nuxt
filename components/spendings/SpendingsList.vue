<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';

defineProps<{
    spendings: ISpending[];
}>();
</script>

<template>
    <div class="spendings-list">
        <SpendingsFilter v-if="spendings.length" />

        <SpendingsCard
            v-for="spending in spendings"
            :key="spending.id"
            :spending="spending"
        />
    </div>
</template>

<style lang="scss" scoped>
.spendings-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>