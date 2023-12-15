<script lang="ts" setup>
import type { ICategory, ISubCategory } from "~/interfaces/category.interface";
import type { ISpending, ISubSpending } from "~/interfaces/spending.interface";
import { useCategoriesStore } from "~/store/categories.store";

const categories = useCategoriesStore();
const { items } = categories;

const isFlattenToggle: Ref<Boolean> = ref(false);

const visibleColumns = ['name', 'sum'];

const computedCategories: ComputedRef<
    Array<ICategory | ISubCategory> | Array<ICategory>
> = computed(() => {
    if (isFlattenToggle.value === true) {
        const flatCategories = items
            .map((i: ICategory) => {
                if (i.subCategories.length > 0) {
                    return i.subCategories;
                }

                return [i];
            })
            .flat();

        return flatCategories;
    }

    return items;
});

// TODO: Добавить самую крупную одноразовую покупку и т.д.
</script>

<template>
    <div class="spendings-page">
        {{computedCategories}} 

        <UiTable :rows="computedCategories" :columns="visibleColumns" />
    </div>
</template>

<style lang="scss" scoped>
.categories-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
        font-size: 2rem;
        font-weight: 600;
    }
}
</style>
