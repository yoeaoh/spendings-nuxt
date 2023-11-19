<template>
    <NuxtPage />
</template>

<script lang="ts" setup>
import { ICategory } from './interfaces/category.interface';
import { IIncome } from './interfaces/income.interface';
import {
    ISpending,
    ISpendingDto,
    ISubSpending,
    ISubSpendingDto,
} from './interfaces/spending.interface';

const spendings: ISpending[] = reactive([]);
const subSpendings: ISubSpending[] = reactive([]);
const categories: ICategory[] = reactive([
    { id: '__0', name: 'Без категории', sum: 0 },
]);
const incomes: IIncome[] = reactive([]);

const isSpendingCardModalOpen: Ref<Boolean> = ref(false);
const spendingCardModalSpendingId: Ref<string | null> = ref(null);

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

function updateSpendings(spendingDto: ISpendingDto): void {
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
}

function updateSubSpendings(subSpendingDto: ISubSpendingDto) {
    const spending = spendings.find(
        (spending: ISpending) => spending.id === subSpendingDto.id,
    );

    if (!spending) return;

    subSpendings.push({
        id: subSpendingDto.id,
        spending: spending,
        name: subSpendingDto.name,
        sum: subSpendingDto.sum,
    });
}

function updateCategories(category: ICategory) {
    categories.push(category);
}

function updateIncomes(income: IIncome) {
    incomes.push(income);
}

function openModal(spendingId: string) {
    isSpendingCardModalOpen.value = true;
    spendingCardModalSpendingId.value = spendingId;
}

function closeModal() {
    isSpendingCardModalOpen.value = false;
    spendingCardModalSpendingId.value = null;
}

provide('spendings', spendings);
provide('updateSpendings', updateSpendings);

provide('subSpendings', subSpendings);
provide('updateSubSpendings', updateSubSpendings);

provide('categories', categories);
provide('updateCategories', updateCategories);

provide('incomes', incomes);
provide('updateIncomes', updateIncomes);

provide('totalIncome', totalIncome);
provide('totalSpendings', totalSpendings);

provide('isSpendingCardModalOpen', isSpendingCardModalOpen);
provide('spendingCardModalSpendingId', spendingCardModalSpendingId);
provide('openModal', openModal);
provide('closeModal', closeModal);
</script>
