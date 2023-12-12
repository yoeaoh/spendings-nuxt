import type { IIncome } from "~/interfaces/income.interface";

export const useIncomesStore = defineStore("incomes", () => {
    const items: Ref<IIncome[]> = ref([]);

    function addNewItem(item: IIncome): void {
        items.value.push(item);
    }

    const total = computed(() =>
        items.value.reduce(
            (sum: number, currentItem: IIncome) => currentItem.sum + sum,
            0,
        ),
    );

    return { items, total, addNewItem };
});
