import { DEFAULT_CATEGORY } from '~/constants/categories.constants';
import type {
    ISpending,
    ISpendingDto,
    ISubSpending,
} from '~/interfaces/spending.interface';
import { useCategoriesStore } from './categories.store';
import type { ICategory } from '~/interfaces/category.interface';

// TODO: Отрефакторить добавление айтемов
// (чтобы все валидации были в одном месте)

// Погуглить, как неймят массивы данных в сторах

export const useSpendingsStore = defineStore('spendings', () => {
    const categories = useCategoriesStore();

    const items: Ref<ISpending[]> = ref([]);

    function addNewItem(item: ISpendingDto): void {
        const category = categories.items.find(
            (c: ICategory) => c.id === item.categoryId,
        );

        if (!category) return;

        category.sum = category.sum + item.sum;

        items.value.push({
            id: item.id,
            sum: item.sum,
            date: Date.parse(item.date),
            category: DEFAULT_CATEGORY,
            description: item.description,
            subSpendings: [],
        });
    }

    function addNewSubSpending(
        spending: ISpending,
        subSpending: ISubSpending,
        availableSum: number,
    ) {
        console.log(`subSpending.sum: ${subSpending.sum}`);
        console.log(`spending.sum: ${spending.sum}`);
        console.log(`availableSum: ${availableSum}`);

        if (subSpending.sum > spending.sum)
            return 'Сумма продукта не должна превышать общую сумму чека';

        if (availableSum - subSpending.sum < 0)
            return 'Сумма всех продуктов не должна превышать общую сумму чека';

        spending.subSpendings.push(subSpending);

        const category = categories.items.find(
            (item) => spending.category.id === item.id,
        );

        category?.subCategories.push({
            id: Date.now().toString(),
            categoryId: spending.category.id,
            name: subSpending.name,
            sum: subSpending.sum,
        });

        return;
    }

    const total = computed(() =>
        items.value.reduce(
            (sum: number, currentItem: ISpending) => currentItem.sum + sum,
            0,
        ),
    );

    return { items, total, addNewItem, addNewSubSpending };
});
