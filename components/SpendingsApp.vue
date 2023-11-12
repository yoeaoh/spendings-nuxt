<script lang="ts" setup>
import { ISpending, ISpendingDto } from '~/interfaces/spending.interface';
import { ICategory } from '~/interfaces/category.interface';
import { IIncome } from '~/interfaces/income.interface';

const spendings: ISpending[] = reactive([]);
const categories: ICategory[] = reactive([
    { id: 'qWe123$', name: 'Без категории', sum: 0 },
]);
const incomes: IIncome[] = reactive([]);

const addSpending = (spendingDto: ISpendingDto) => {
    const category = categories.find(
        (c: ICategory) => c.id === spendingDto.categoryId,
    );

    if (!category) return;

    category.sum = category.sum + spendingDto.sum;

    spendings.push({
        id: spendingDto.id,
        sum: spendingDto.sum,
        date: spendingDto.date,
        category: category,
        description: spendingDto.description,
    });
};

const addCategory = (category: ICategory) => {
    categories.push(category);
};

const addIncome = (income: IIncome) => {
    incomes.push(income);
};

const totalIncome = computed(() =>
    incomes.reduce((sum, currentIncome) => currentIncome.sum + sum, 0),
);

const totalSpendings = computed(() =>
    spendings.reduce((sum, currentSpending) => currentSpending.sum + sum, 0),
);
</script>

<template>
    <div class="layout">
        <div class="column spendings">
            <SpendingsForm
                @addSpending="addSpending"
                :categories="categories"
            />

            <div class="column__list">
                <SpendingsItem
                    v-for="spending in spendings"
                    :key="spending.id"
                    :spending="spending"
                />
            </div>

            <div class="column__total">Всего: {{ totalSpendings }}</div>
        </div>

        <div class="divider"></div>

        <div class="column categories">
            <CategoriesForm
                @addCategory="addCategory"
                :categories="categories"
            />

            <div class="column__list">
                <CategoriesItem
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                />
            </div>
        </div>

        <div class="divider"></div>

        <div class="column incomes">
            <IncomesForm @addIncome="addIncome" />

            <div class="column__list">
                <IncomesItem
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
    grid-template-columns: 1fr 2px 1fr 2px 1fr;
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
