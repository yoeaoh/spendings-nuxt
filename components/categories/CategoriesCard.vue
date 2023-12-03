<script lang="ts" setup>
import { type ICategory } from '~/interfaces/category.interface';

const props = defineProps<{
    category: ICategory;
}>();

const hasSubCategories = computed(() => props.category.subCategories?.length);
</script>

<template>
    <div class="categories-card">
        <div class="categories-card__container">
            <div class="categories-card__name categories-card-name">
                <div class="categories-card-name__text">
                    {{ category.name }}
                </div>
            </div>

            <div class="categories-card__sum">
                {{ category.sum }}
                <span class="categories-card__currency"> BYN</span>
            </div>
        </div>

        <ul v-if="hasSubCategories" class="categories-card__sub-categories">
            <li
                v-for="subCategory in category.subCategories"
                :key="subCategory.id"
            >
                ▹ {{ subCategory.name }} —
                <span class="categories-card-sub-categories__sum">
                    {{ subCategory.sum }}
                </span>
                <span class="categories-card-sub-categories__currency"
                    >BYN</span
                >
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.categories-card {
    background-image: linear-gradient(
        120deg,
        hsl(178, 56%, 25%),
        hsl(178, 56%, 15%)
    );
    padding: 0.5rem;
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    color: white;
    border-radius: 0.5rem;
    gap: 1rem;

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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

    &__sub-categories {
        border-top: 1px dashed hsla(0, 0%, 100%, 0.2);
        padding-top: 1rem;
        margin-top: 1rem;
    }
}

.categories-card-name {
    &__text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.categories-card-sub-categories {
    &__sum {
        font-weight: 600;
    }

    &__currency {
        margin-left: 0.2rem;
        font-size: 0.75rem;
    }
}
</style>
