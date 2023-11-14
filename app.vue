<template>
    <NuxtPage />
</template>

<script lang="ts" setup>
import { ICategory } from './interfaces/category.interface';
import { IIncome } from './interfaces/income.interface';
import { ISpending, ISpendingDto } from './interfaces/spending.interface';

const spendings: ISpending[] = reactive([]);
const categories: ICategory[] = reactive([
    { id: '__0', name: 'Без категории', sum: 0 },
]);
const incomes: IIncome[] = reactive([]);

const updateSpendings = (spendingDto: ISpendingDto): void => {
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

const updateCategories = (category: ICategory) => {
    categories.push(category);
};

const updateIncomes = (income: IIncome) => {
    incomes.push(income);
};

const totalIncome = computed(() =>
    incomes.reduce(
        (sum: number, currentIncome: IIncome) => currentIncome.sum + sum,
        0,
    ),
);

const totalSpendings = computed(() =>
    spendings.reduce(
        (sum: number, currentSpending: ISpending) => currentSpending.sum + sum,
        0,
    ),
);

provide('spendings', spendings);
provide('updateSpendings', updateSpendings);
provide('categories', categories);
provide('updateCategories', updateCategories);
provide('incomes', incomes);
provide('updateIncomes', updateIncomes);

provide('totalIncome', totalIncome);
provide('totalSpendings', totalSpendings);
</script>
