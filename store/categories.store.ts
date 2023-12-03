import { DEFAULT_CATEGORY } from '~/constants/categories.constants';
import type { ICategory, ISubCategory } from '~/interfaces/category.interface';

export const useCategoriesStore = defineStore('categories', () => {
    const items: Ref<ICategory[]> = ref([DEFAULT_CATEGORY]);

    function addNewItem(item: ICategory): void {
        items.value.push(item);
    }

    function addNewSubCategory(category: ICategory, subCategory: ISubCategory) {
        category.subCategories.push(subCategory);
    }

    return { items, addNewItem, addNewSubCategory };
});
