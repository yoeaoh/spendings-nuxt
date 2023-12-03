import type { IIncome } from '~/interfaces/income.interface';

export const useIncomesStore = defineStore('incomes', () => {
    const items: IIncome[] = reactive([]);

    function addNewItem(item: IIncome): void {
        items.push(item);
    }

    const totalIncome = computed(() =>
        items.reduce(
            (sum: number, currentItem: IIncome) => currentItem.sum + sum,
            0,
        ),
    );

    return { items, addNewItem, totalIncome };
});
