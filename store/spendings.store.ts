import { defineStore, acceptHMRUpdate } from 'pinia';
import { DEFAULT_CATEGORY } from '~/constants/categories.constants';
import type { ISpending, ISpendingDto } from '~/interfaces/spending.interface';

export const useSpendingsStore = defineStore({
    id: 'cart',
    state: () => ({
        items: [] as ISpending[],
    }),
    getters: {
        spendings: (state) => {
            return state.items;
        },
    },
    actions: {
        addItem(item: ISpendingDto) {
            this.items.push({
                id: item.id,
                sum: item.sum,
                date: Date.parse(item.date),
                category: DEFAULT_CATEGORY,
                description: item.description,
                subSpendings: [],
            });
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSpendingsStore, import.meta.hot));
}
