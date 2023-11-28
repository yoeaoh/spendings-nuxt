<script lang="ts" setup>
import { type ISpending } from '~/interfaces/spending.interface';
import { type ICategory } from '~/interfaces/category.interface';
import { type IIncome } from '~/interfaces/income.interface';

const spendings = inject<ISpending[]>('spendings', []);
const categories = inject<ICategory[]>('categories', []);
const incomes = inject<IIncome[]>('incomes', []);

const totalIncome = inject<number>('totalIncome', 0);
const totalSpendings = inject<number>('totalSpendings', 0);
</script>

<template>
    <div class="layout">
        <div class="column total">
            <TotalCard />
        </div>

        <div class="divider"></div>

        <div class="column spendings">
            <SpendingsForm />

            <SpendingsList :spendings="spendings" class="column__list" />

            <div class="column__total column-total">
                <div class="column-total__container">
                    Всего:
                    <span class="column-total__sum">
                        {{ totalSpendings }}
                    </span>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="column categories">
            <CategoriesForm />

            <CategoriesList :categories="categories" class="column__list" />
        </div>

        <div class="divider"></div>

        <div class="column incomes">
            <IncomesForm />

            <IncomesList :incomes="incomes" class="column__list" />

            <div class="column__total column-total">
                <div class="column-total__container">
                    Всего:
                    <span class="column-total__sum">
                        {{ totalIncome }}
                    </span>
                </div>
            </div>
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
    padding: 0.5rem;

    overflow-y: auto;

    &__total {
        position: sticky;
        bottom: -1rem;
        left: 0;
        right: 0;

        margin-left: -0.5rem;
        margin-right: -0.5rem;
        margin-bottom: -0.5rem;
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

.column-total {
    background-image: linear-gradient(0deg, hsl(231, 78%, 7%) 5rem, transparent);
    padding-top: 3rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;

    &__container {
        background-image: linear-gradient(30deg, hsl(213, 49%, 12%), hsl(212, 38%, 15%));
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
    }
    
    &__sum {
        font-weight: 600;
    }
}
</style>
