<template>
    <div class="container">
        <div class="spendings">
            <SpendingsForm
                @addSpending="addSpending"
                :categories="categories"
            />

            <div class="spendings__list">
                <SpendingsItem
                    v-for="spending in spendings"
                    :key="spending.id"
                    :spending="spending"
                />

                {{ spendings }}
            </div>
        </div>

        <div class="divider"></div>

        <div class="categories">
            <CategoriesForm @addCategory="addCategory" />

            <div class="categories__list">
                <CategoriesItem
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                />

                {{ categories }}
            </div>
        </div>

        <div class="divider"></div>

        <div class="incomes">
            <IncomesForm @addIncome="addIncome" />

            <div class="categories__list">
                <IncomesItem
                    v-for="income in incomes"
                    :key="income.id"
                    :income="income"
                />

                {{ incomes }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SpendingsForm from '~/components/spendings/SpendingsForm.vue';
import SpendingsItem from '~/components/spendings/SpendingsItem.vue';
import CategoriesForm from '~/components/categories/CategoriesForm.vue';
import CategoriesItem from '~/components/categories/CategoriesItem.vue';

import { ISpending } from '~/interfaces/spending.interface';
import { ICategory } from '~/interfaces/category.interface';
import { IIncome } from '~/interfaces/income.interface';

const spendings: ISpending[] = reactive([]);
const categories: ICategory[] = reactive([]);
const incomes: IIncome[] = reactive([]);

const addSpending = (spending: ISpending) => {
    spendings.push(spending);
};

const addCategory = (category: ICategory) => {
    categories.push(category);
};

const addIncome = (income: IIncome) => {
    incomes.push(income);
};
</script>

<style lang="scss" scoped>
.container {
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

.spendings {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}

.categories {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}

.incomes {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
