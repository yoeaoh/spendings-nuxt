<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';
import { FilterVariants } from '~/constants/spendings.constants';
import { type IFilterVariants } from '~/constants/spendings.constants';

const props = defineProps<{
    spendings: ISpending[];
}>();

const selectedFilter: Ref<IFilterVariants> = ref(FilterVariants.ASC_DATE.key);

function changeFilterValue(newValue: IFilterVariants) {
    selectedFilter.value = newValue;
}

const filteredSpendings = computed(() => {
    switch (selectedFilter.value) {
        case FilterVariants.ASC_SUM.key:
            return props.spendings.sort(
                (a: ISpending, b: ISpending) => a.sum - b.sum,
            );
        case FilterVariants.DESC_SUM.key:
            return props.spendings.sort(
                (a: ISpending, b: ISpending) => b.sum - a.sum,
            );
        case FilterVariants.ASC_DATE.key:
            return props.spendings.sort(
                (a: ISpending, b: ISpending) => a.date - b.date,
            );
        case FilterVariants.DESC_DATE.key:
            return props.spendings.sort(
                (a: ISpending, b: ISpending) => b.date - a.date,
            );
    }
});
</script>

<template>
    <div class="spendings-list">
        <SpendingsFilter
            :selectedFilter="selectedFilter"
            @changeFilterValue="changeFilterValue"
            v-if="spendings.length"
            class="spendings-list__filter"
        />

        <SpendingsCard
            v-for="spending in filteredSpendings"
            :key="spending.id"
            :spending="spending"
        />
    </div>
</template>

<style lang="scss" scoped>
.spendings-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &__filter {
        margin-left: auto;
    }
}
</style>
