<script lang="ts" setup>
import { IIncome } from '~/interfaces/income.interface';

defineProps<{
    income: IIncome;
}>();
</script>

<template>
    <div class="incomes-item">
        <div class="incomes-item__sum">
            {{ income.sum }}<span class="incomes-item__currency">руб</span>
        </div>

        <div class="incomes-item__name">
            {{ income.name }}
        </div>

        <div class="incomes-item__date">
            {{ income.date }}
        </div>
    </div>
</template>

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

    &__currency {
        font-size: 1rem;
    }

    &__name {
        font-size: 1.5rem;
    }

    &__date {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
