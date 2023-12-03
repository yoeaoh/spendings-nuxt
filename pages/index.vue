<script lang="ts" setup>
import { useCategoriesStore } from '~/store/categories.store';
import { useIncomesStore } from '~/store/incomes.store';
import { useSpendingsStore } from '~/store/spendings.store';

const spendings = useSpendingsStore();
const categories = useCategoriesStore();
const incomes = useIncomesStore();

const totalIncome = incomes.totalIncome;
const totalSpendings = spendings.totalSpendings;
const totalValue = computed(() => unref(totalIncome) - unref(totalSpendings));
</script>

<template>
    <div class="layout">
        <div class="column total">
            <TotalCard :totalValue="totalValue" />
        </div>

        <div class="divider"></div>

        <div class="column spendings">
            <SpendingsForm />

            <SpendingsList :spendings="spendings.items" class="column__list" />

            <TotalCard :totalValue="totalSpendings" class="column__total" />
        </div>

        <div class="divider"></div>

        <div class="column categories">
            <CategoriesForm />

            <CategoriesList
                :categories="categories.items"
                class="column__list"
            />
        </div>

        <div class="divider"></div>

        <div class="column incomes">
            <IncomesForm />

            <IncomesList :incomes="incomes.items" class="column__list" />

            <TotalCard :totalValue="totalIncome" class="column__total" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr;
    grid-auto-flow: row;
}

.divider {
    flex: none;
    width: 2px;
    background-color: hsla(0, 0%, 100%, 0.05);
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.column {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    max-height: 100vh;
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0;
    padding-left: 0.5rem;

    overflow-y: auto;

    &__total {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;

        margin-left: -0.5rem;
        margin-right: -0.5rem;

        padding-top: 3rem;
        padding-right: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
    }

    &__list {
        flex-grow: 1;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: hsl(212, 18%, 31%);
        border-radius: 3px;
    }

    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
}
</style>
