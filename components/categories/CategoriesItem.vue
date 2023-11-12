<script lang="ts" setup>
import { ICategory } from '~/interfaces/category.interface';

defineProps<{
    category: ICategory;
}>();
</script>

<template>
    <div class="categories-item">
        <div class="categories-item__name">
            {{ category.name }}
        </div>

        <div class="categories-item__sum">
            {{ category.sum }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.categories-item {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    background-color: #1c6361;
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__sum {
        font-size: 2rem;
    }
}
</style>
