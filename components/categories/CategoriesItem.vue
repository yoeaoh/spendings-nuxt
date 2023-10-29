<template>
    <div class="categories-item">
        {{ category.name }}
    </div>
</template>

<script lang="ts" setup>
import { ICategory } from '~/interfaces/category.interface';

defineProps<{
    category: ICategory;
}>();
</script>

<style lang="scss" scoped>
.categories-item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #1c6361;
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;
}
</style>
