<script lang="ts" setup>
import { FilterVariants } from '~/constants/spendings.constants';
import { type IFilterVariants } from '~/constants/spendings.constants';

const props = defineProps<{
    selectedFilter: IFilterVariants;
}>();

const emit = defineEmits(['changeFilterValue']);

// Изменить функцию изменения

const filterValue = ref<IFilterVariants>(props.selectedFilter);
function changeValue(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('changeFilterValue', target.value);
}
</script>

<template>
    <div class="spendings-filter">
        <select v-model="filterValue" @change="changeValue">
            <option :value="variant.key" v-for="variant of FilterVariants">
                {{ variant.name }}
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
