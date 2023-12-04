<script lang="ts" setup>
import { type IIncome } from '~/interfaces/income.interface';

defineProps<{
    incomes: IIncome[];
}>();
</script>

<template>
    <div class="incomes-list">
        <IncomesCard
            v-for="income in incomes"
            :key="income.id"
            :income="income"
        />
    </div>
</template>

<style lang="scss" scoped>
.incomes-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
