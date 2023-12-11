<script lang="ts" setup>
import { type ISpending } from '~/interfaces/spending.interface';
import { type IFilterVariants } from '~/constants/spendings.constants';
import { FilterVariants } from '~/constants/spendings.constants';
import { useSpendingsStore } from '~/store/spendings.store';

const spendings = useSpendingsStore();

const selectedFilter: Ref<IFilterVariants> = ref(
    FilterVariants.ADD_DATE_ASC.key,
);

function changeFilterValue(newValue: IFilterVariants) {
    selectedFilter.value = newValue;
}

const filteredSpendings = computed(() => {
    switch (selectedFilter.value) {
        case FilterVariants.ADD_DATE_ASC.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) =>
                    Number.parseInt(a.id) - Number.parseInt(b.id),
            );
        case FilterVariants.ADD_DATE_DESC.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) =>
                    Number.parseInt(b.id) - Number.parseInt(a.id),
            );
        case FilterVariants.ASC_SUM.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) => a.sum - b.sum,
            );
        case FilterVariants.DESC_SUM.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) => b.sum - a.sum,
            );
        case FilterVariants.ASC_DATE.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) => a.date - b.date,
            );
        case FilterVariants.DESC_DATE.key:
            return spendings.items.toSorted(
                (a: ISpending, b: ISpending) => b.date - a.date,
            );
    }
});
</script>

<template>
    <div class="spendings-list">
        <div v-if="spendings.items.length" class="spendings-list__container">
            <SpendingsFilter :selectedFilter="selectedFilter" @changeFilterValue="changeFilterValue" />

            <SpendingsCard v-for="spending in filteredSpendings" :key="spending.id" :spending="spending" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.spendings-list {
    &__container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
