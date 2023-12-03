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

export const useSpendingsStore = defineStore('spendings', () => {
    const categories = useCategoriesStore();

    const items: ISpending[] = reactive([]);

    function addNewItem(item: ISpendingDto): void {
        const category = categories.items.find(
            (c: ICategory) => c.id === item.categoryId,
        );

        if (!category) return;

        category.sum = category.sum + item.sum;

        items.push({
            id: item.id,
            sum: item.sum,
            date: Date.parse(item.date),
            category: DEFAULT_CATEGORY,
            description: item.description,
            subSpendings: [],
        });
    }

    const totalSpendings = computed(() =>
        items.reduce(
            (sum: number, currentItem: ISpending) => currentItem.sum + sum,
            0,
        ),
    );

    function addNewSubSpending(spending: ISpending, subSpending: ISubSpending) {
        if (subSpending.sum > spending.sum)
            return 'Сумма продукта не должна превышать общую сумму чека';

        const subSpendingsSum = spending.subSpendings.reduce(
            (sum: number, currSpending: ISubSpending) => {
                return sum + currSpending.sum;
            },
            0,
        );

        if (subSpendingsSum >= spending.sum) return;

        spending.subSpendings.push(subSpending);

        const category = categories.items.find(
            (item) => item.name === subSpending.name,
        );

        if (!category) {
            categories.items.push({
                id: Date.now().toString(),
                name: subSpending.name,
                sum: subSpending.sum,
            });

            return;
        }

        category.sum = category.sum + subSpending.sum;

        return;
    }

    return { items, addNewItem, totalSpendings, addNewSubSpending };
});
