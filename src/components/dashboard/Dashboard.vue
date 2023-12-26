<script lang="ts" setup>
import { useCategoriesStore } from "~/store/categories.store";
import { useIncomesStore } from "~/store/incomes.store";
import { useSpendingsStore } from "~/store/spendings.store";

const spendings = useSpendingsStore();
const categories = useCategoriesStore();
const incomes = useIncomesStore();

const totalValue = computed(() => incomes.total - spendings.total);
</script>

<template>
    <div class="dashboard">
        <div class="dashboard__column dashboard-column">
            <TotalCard :total-value="totalValue" />
        </div>

        <div class="dashboard__divider dashboard-divider" />

        <div class="dashboard__column dashboard-column">
            <SpendingsForm />

            <SpendingsShadcnSpendingsForm />

            <SpendingsList class="dashboard-column__list" />

            <TotalCard
                :total-value="spendings.total"
                class="dashboard-column__total"
            />
        </div>

        <div class="dashboard__divider dashboard-divider" />

        <div class="dashboard__column dashboard-column">
            <CategoriesForm />

            <CategoriesList
                :categories="categories.items"
                class="dashboard-column__list"
            />
        </div>

        <div class="dashboard__divider dashboard-divider" />

        <div class="dashboard__column dashboard-column">
            <IncomesForm />

            <IncomesList
                :incomes="incomes.items"
                class="dashboard-column__list"
            />

            <TotalCard
                :total-value="incomes.total"
                class="dashboard-column__total"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr;
    grid-auto-flow: row;
    height: 100%;
}

.dashboard-divider {
    flex: none;
    width: 2px;
    background-color: hsla(0, 0%, 100%, 0.05);
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.dashboard-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: relative;
    overflow-y: auto;

    padding-right: 0.5rem;
    padding-bottom: 0;
    padding-left: 0.5rem;

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
