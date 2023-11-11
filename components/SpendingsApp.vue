<template>
    <div class="container">
        <div class="spendings">
            <SpendingsFormV2
                @addSpending="addSpending"
                :categories="categories"
            />

            <div class="spendings__list">
                <SpendingsItem
                    v-for="spending in spendings"
                    :key="spending.id"
                    :spending="spending"
                />
            </div>

            <div class="spendings__total">Всего: {{ totalSpendings }}</div>
        </div>

        <div class="divider"></div>

        <div class="categories">
            <CategoriesFormV2 @addCategory="addCategory" />

            <div class="categories__list">
                <CategoriesItem
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                />
            </div>
        </div>

        <div class="divider"></div>

        <div class="incomes">
            <IncomesFormV2 @addIncome="addIncome" />

            <div class="incomes__list">
                <IncomesItem
                    v-for="income in incomes"
                    :key="income.id"
                    :income="income"
                />
            </div>

            <div class="incomes__total">Всего: {{ totalIncome }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
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

const totalIncome = computed(() =>
    incomes.reduce((sum, currentIncome) => currentIncome.sum + sum, 0),
);

const totalSpendings = computed(() =>
    spendings.reduce((sum, currentSpending) => currentSpending.sum + sum, 0),
);
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

.categories {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 100vh;
    padding: 1rem;

    overflow-y: auto;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #635e1c;
        border-radius: 3px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }
}

.incomes {
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
        background-color: #28631c;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
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
        background-color: #28631c;
        border-radius: 3px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }
}
</style>
