<script lang="ts" setup>
import { type IIncome } from "~/interfaces/income.interface";

defineProps<{
    income: IIncome;
}>();
</script>

<template>
    <div class="incomes-card">
        <div class="incomes-card__sum">
            {{ income.sum }}<span class="incomes-card__currency"> BYN</span>
        </div>

        <div v-if="income.name" class="incomes-card__name">
            {{ income.name }}
        </div>

        <div class="incomes-card__date">
            {{ income.date }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.incomes-card {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-image: linear-gradient(
        120deg,
        hsl(216, 56%, 25%),
        hsl(216, 56%, 15%)
    );
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__sum {
        font-size: 1.25rem;
        font-weight: 600;
    }

    &__currency {
        font-size: 0.75rem;
    }

    &__name {
        font-size: 1rem;
    }

    &__date {
        font-size: 0.75rem;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
