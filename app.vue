<script lang="ts" setup>
import { type ICategory } from '~/interfaces/category.interface';
import { type IIncome } from '~/interfaces/income.interface';
import {
    type ISpending,
    type ISpendingDto,
    type ISubSpending,
} from './interfaces/spending.interface';

const spendings: ISpending[] = reactive([]);
const categories: ICategory[] = reactive([
    { id: '__0', name: 'Без категории', sum: 0 },
]);
const incomes: IIncome[] = reactive([]);

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

function addNewSpending(spendingDto: ISpendingDto): void {
    const category = categories.find(
        (c: ICategory) => c.id === spendingDto.categoryId,
    );

    if (!category) return;

    category.sum = category.sum + spendingDto.sum;

    spendings.push({
        id: spendingDto.id,
        sum: spendingDto.sum,
        date: Date.parse(spendingDto.date),
        category: category,
        description: spendingDto.description,
        subSpendings: [],
    });
}

function addNewSubSpending(spending: ISpending, subSpending: ISubSpending) {
    if (subSpending.sum > spending.sum)
        return 'Сумма продукта не должна превышать общую сумму чека';

    const subSpendingsSum = spending.subSpendings.reduce(
        (sum: number, currSpending: ISubSpending) => {
            return sum + currSpending.sum;
        },
        0,
    );

    if (subSpendingsSum >= spending.sum) return;

    spending.subSpendings.push(subSpending);

    const category = categories.find((item) => item.name === subSpending.name);

    if (!category) {
        categories.push({
            id: Date.now().toString(),
            name: subSpending.name,
            sum: subSpending.sum,
        });

        return;
    }

    category.sum = category.sum + subSpending.sum;

    return;
}

function addNewCategory(category: ICategory): void {
    categories.push(category);
}

function addNewIncome(income: IIncome): void {
    incomes.push(income);
}

provide('spendings', spendings);
provide('addNewSpending', addNewSpending);
provide('addNewSubSpending', addNewSubSpending);

provide('categories', categories);
provide('addNewCategory', addNewCategory);

provide('incomes', incomes);
provide('addNewIncome', addNewIncome);

provide('totalIncome', totalIncome);
provide('totalSpendings', totalSpendings);
</script>

<template>
    <NuxtPage />
</template>
