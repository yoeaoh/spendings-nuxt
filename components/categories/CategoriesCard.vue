<script lang="ts" setup>
import { ICategory } from '~/interfaces/category.interface';

defineProps<{
    category: ICategory;
}>();
</script>

<template>
    <div class="categories-card">
        <div class="categories-card__name categories-card-name">
            <div class="categories-card-name__text">
                {{ category.name }}
            </div>
        </div>

        <div class="categories-card__sum">
            {{ category.sum }}<span class="categories-card__currency"> BYN</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.categories-card {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(120deg, hsl(178, 56%, 25%), hsl(178, 56%, 15%));
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    color: white;
    border-radius: 0.5rem;
    gap: 1rem;

    &__name {
        font-size: 1rem;
        min-width: 0;
        flex-shrink: 1;
    }

    &__sum {
        min-width: 0;
        flex-shrink: 0;
        font-size: 1.25rem;
        font-weight: 600;
    }

    &__currency {
        font-size: 0.75rem;
    }
}

.categories-card-name {
    &__text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
