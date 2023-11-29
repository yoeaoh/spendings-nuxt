<script lang="ts" setup>
import { type ICategory } from '~/interfaces/category.interface';

defineProps<{
    categories: ICategory[];
}>();
</script>

<template>
    <div class="categories-list">
        <CategoriesCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
        />
    </div>
</template>

<style lang="scss" scoped>
.categories-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>