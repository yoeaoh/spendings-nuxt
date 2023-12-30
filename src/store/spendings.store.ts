import { useCategoriesStore } from "./categories.store";
import type { ISpending, ISubSpending } from "~/interfaces/spending.interface";
import type { ICategory } from "~/interfaces/category.interface";

// TODO: Отрефакторить добавление айтемов
// (чтобы все валидации были в одном месте)

// Погуглить, как неймят массивы данных в сторах

export const useSpendingsStore = defineStore("spendings", () => {
    const categories = useCategoriesStore();

    const items: Ref<ISpending[]> = ref([]);

    function addNewItem(item: ISpending): void {
        const category = categories.items.find(
            (c: ICategory) => c.id === item.category.id,
        );

        if (!category) return;

        category.sum = category.sum + item.sum;

        items.value.push({
            id: item.id,
            sum: item.sum,
            date: item.date,
            category,
            name: item.name,
            subSpendings: [],
        });
    }

    function addNewSubSpending(
        spending: ISpending,
        subSpending: ISubSpending,
        availableSum: number,
    ) {
        if (subSpending.sum > spending.sum)
            return "Сумма продукта не должна превышать общую сумму чека";

        if (availableSum - subSpending.sum < 0)
            return "Сумма всех продуктов не должна превышать общую сумму чека";

        spending.subSpendings?.push(subSpending);

        const category = categories.items.find(
            (i: ICategory) => i.id === spending.category.id,
        );

        if (!category) return;

        categories.addNewSubCategoryOrChangeIfExists(category, subSpending);
    }

    const total = computed(() =>
        items.value.reduce(
            (sum: number, currentItem: ISpending) => currentItem.sum + sum,
            0,
        ),
    );

    return { items, total, addNewItem, addNewSubSpending };
});
