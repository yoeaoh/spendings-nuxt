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
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SpendingsForm from '~/components/spendings/SpendingsForm.vue';
import SpendingsItem from '~/components/spendings/SpendingsItem.vue';
import CategoriesForm from '~/components/categories/CategoriesForm.vue';
import CategoriesItem from '~/components/categories/CategoriesItem.vue';

import { ISpendingItem } from '~/interfaces/spending.interface';
import { ICategory } from '~/interfaces/category.interface';

const spendings: ISpendingItem[] = reactive([]);
const categories: ICategory[] = reactive([]);

const addSpending = (spending: ISpendingItem) => {
    spendings.push(spending);
};

const addCategory = (category: ICategory) => {
    categories.push(category);
};
</script>

<style lang="scss" scoped>
.container {
    width: 800px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
}

.divider {
    flex: none;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.05);
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.spendings {
    padding: 1rem;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}

.categories {
    flex-basis: 50%;
    padding: 1rem;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
