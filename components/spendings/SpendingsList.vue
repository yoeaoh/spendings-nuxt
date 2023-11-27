<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';
import { FilterVariants } from '~/constants/spendings.constants';

const props = defineProps<{
    spendings: ISpending[];
}>();

// Изменить формат даты, чтобы она содержала секунды,
// а форматирование применять только для отображаемой даты

const selectedFilter: Ref<FilterVariants> = ref(FilterVariants.DESC_DATE);

function changeFilterValue(newValue: FilterVariants) {
    selectedFilter.value = newValue;
}

const filteredSpendings = computed(() => {
    const sorted = props.spendings.sort((a: ISpending, b: ISpending) => {
        if (selectedFilter.value === FilterVariants.ASC_SUM)
            return a.sum - b.sum;

        if (selectedFilter.value === FilterVariants.DESC_SUM)
            return a.date > b.date ? 1 : -1;

        if (selectedFilter.value === FilterVariants.ASC_DATE)
            return a.date > b.date ? 1 : -1;

        if (selectedFilter.value === FilterVariants.DESC_DATE)
            return b.date > a.date ? 1 : -1;

        return 0;
    });

    return sorted;
});
</script>

<template>
    <div class="spendings-list">
        <SpendingsFilter
            :selectedFilter="selectedFilter"
            :changeFilterValue="changeFilterValue"
            v-if="spendings.length"
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
}
</style>
