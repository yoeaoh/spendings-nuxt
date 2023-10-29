<template>
    <div class="incomes-item">
        <div class="incomes-item__sum">
            {{ income.sum }}
        </div>

        <div class="incomes-item__date">
            {{ income.date }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ISpendingItem } from '~/interfaces/spending.interface';

defineProps<{
    income: IIncomeItem;
}>();
</script>

<style lang="scss" scoped>
.incomes-item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #611c63;
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__sum {
        font-size: 3rem;
    }

    &__date {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
