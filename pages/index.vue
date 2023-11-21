<script lang="ts" setup>
import { ISpending, ISubSpending } from '~/interfaces/spending.interface';
import { ICategory } from '~/interfaces/category.interface';
import { IIncome } from '~/interfaces/income.interface';

const spendings = inject<ISpending[]>('spendings', []);
const categories = inject<ICategory[]>('categories', []);
const incomes = inject<IIncome[]>('incomes', []);
const subSpendings = inject<ISubSpending[]>('subSpendings', []);

const totalIncome = inject<number>('totalIncome', 0);
const totalSpendings = inject<number>('totalSpendings', 0);

const isSpendingCardModalOpen = inject<Boolean>(
    'isSpendingCardModalOpen',
    false,
);
const spendingCardModalSpendingItem = inject<ISpending | {}>(
    'spendingCardModalSpendingItem',
    {},
);

// Добавить возможность фильтровать по дате добавления, по дате, по сумме.
</script>

<template>
    <div class="layout">
        <div class="column total">
            <TotalCard />
        </div>

        <div class="divider"></div>

        <div class="column spendings">
            <SpendingsForm />

            <div class="column__list">
                <SpendingsCard
                    v-for="spending in spendings"
                    :key="spending.id"
                    :spending="spending"
                />
            </div>

            <div class="column__total">Всего: {{ totalSpendings }}</div>
        </div>

        <div class="divider"></div>

        <div class="column categories">
            <CategoriesForm />

            <div class="column__list">
                <CategoriesCard
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                />
            </div>
        </div>

        <div class="divider"></div>

        <div class="column incomes">
            <IncomesForm />

            <div class="column__list">
                <IncomesCard
                    v-for="income in incomes"
                    :key="income.id"
                    :income="income"
                />
            </div>

            <div class="column__total">Всего: {{ totalIncome }}</div>
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
    background-color: rgba(255, 255, 255, 0.05);
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.column {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    max-height: 100vh;
    padding: 1rem;

    overflow-y: auto;

    &__list {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    &__total {
        background-color: #2d1c63;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        position: sticky;
        bottom: 0;
        left: 1rem;
        right: 1rem;
        box-shadow: 0 2rem 0 #0f0a20;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2d1c63;
        border-radius: 3px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }
}
</style>
