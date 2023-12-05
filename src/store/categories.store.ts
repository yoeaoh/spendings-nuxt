import { DEFAULT_CATEGORY } from '~/constants/categories.constants';
import type { ICategory, ISubCategory } from '~/interfaces/category.interface';
import type { ISubSpending } from '~/interfaces/spending.interface';

export const useCategoriesStore = defineStore('categories', () => {
    const items: Ref<ICategory[]> = ref([DEFAULT_CATEGORY]);

    function addNewItem(item: ICategory): void {
        items.value.push(item);
    }

    function addNewSubCategoryOrChangeIfExists(
        category: ICategory,
        subSpending: ISubSpending,
    ) {
        const subCategory = category.subCategories.find(
            (i: ISubCategory) => i.name === subSpending.name,
        );

        if (!subCategory) {
            category.subCategories.push({
                id: Date.now().toString(),
                categoryId: category.id,
                name: subSpending.name,
                sum: subSpending.sum,
                count: 1,
            });

            return;
        }

        subCategory.sum = subCategory.sum + subSpending.sum;
        subCategory.count = subCategory.count + 1;
    }

    return { items, addNewItem, addNewSubCategoryOrChangeIfExists };
});
