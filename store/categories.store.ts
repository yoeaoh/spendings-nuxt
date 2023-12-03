import type { ICategory } from '~/interfaces/category.interface';

export const useCategoriesStore = defineStore('categories', () => {
    const items: ICategory[] = reactive([
        { id: '__0', name: 'Без категории', sum: 0 },
    ]);

    function addNewItem(item: ICategory): void {
        items.push(item);
    }

    return { items, addNewItem };
});
