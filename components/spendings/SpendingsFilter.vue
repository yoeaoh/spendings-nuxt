<script lang="ts" setup>
import { FilterVariants } from '~/constants/spendings.constants';

const props = defineProps<{
    selectedFilter: FilterVariants;
    changeFilterValue: (newValue: FilterVariants) => void;
}>();

// Изменить функцию изменения

const filterValue = ref<FilterVariants>(props.selectedFilter);
function changeValue(e: HTMLevent) {
    defineEmits();
}

defineEmits(['changeFilterValue']);
</script>

<template>
    <div class="spendings-filter">
        <select v-model="filterValue" @change="">
            <option value="variant" v-for="variant in FilterVariants">
                {{ variant }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.spendings-filter {
    display: flex;
    gap: 1rem;

    &__button {
        margin-left: auto;
    }
}
</style>
