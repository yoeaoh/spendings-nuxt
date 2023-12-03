import type { IIncome } from '~/interfaces/income.interface';

export const useIncomesStore = defineStore('incomes', () => {
    const items: Ref<IIncome[]> = ref([]);

    function addNewItem(item: IIncome): void {
        items.value.push(item);
    }

    // const total = computed(() =>
    //     items.reduce(
    //         (sum: number, currentItem: IIncome) => currentItem.sum + sum,
    //         0,
    //     ),
    // );

    const total = computed(() => items.value.length);

    return { items, total, addNewItem };
});
