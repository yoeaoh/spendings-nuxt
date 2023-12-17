<script lang="ts" setup>
import type {
    ICategory,
    ICategoryColumns,
    ISubCategory,
} from "~/interfaces/category.interface";
import { useCategoriesStore } from "~/store/categories.store";

const categories = useCategoriesStore();

const isFlattenToggle: Ref<Boolean> = ref(false);

const visibleColumns: Ref<ICategoryColumns> = ref(["name", "sum"]);

const computedCategories: ComputedRef<
    Array<ICategory | ISubCategory> | Array<ICategory>
> = computed(() => {
    if (isFlattenToggle.value === true) {
        const flatCategories = categories.items
            .map((i: ICategory) => {
                if (i.subCategories.length > 0) {
                    return i.subCategories;
                }

                return [i];
            })
            .flat();

        return flatCategories;
    }

    return categories.items;
});

// TODO: Добавить самую крупную одноразовую покупку и т.д.
</script>

<template>
    <div class="spendings-page">
        <input v-model="isFlattenToggle" type="checkbox" />

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
