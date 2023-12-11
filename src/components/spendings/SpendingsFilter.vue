<script lang="ts" setup>
import { type IFilterVariants } from '~/constants/spendings.constants';
import { FilterVariants } from '~/constants/spendings.constants';

const props = defineProps<{
    selectedFilter: IFilterVariants;
}>();

const emit = defineEmits(['changeFilterValue']);

const filterValue = ref<IFilterVariants>(props.selectedFilter);

function changeValue(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('changeFilterValue', target.value);
}
</script>

<template>
    <div class="spendings-filter">
        <select v-model="filterValue" @change="changeValue" class="spendings-filter__select">
            <option value="0" disabled selected>Сортировать:</option>
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

    &__select {
        padding: 0.25rem 0.25rem;
        border-radius: 0.25rem;
        background-image: linear-gradient(30deg,
                hsl(213, 49%, 12%),
                hsl(212, 38%, 15%));
        background-color: hsl(213, 49%, 12%);
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        margin-left: auto;
        color: hsla(0, 0%, 100%, 1);
    }
}
</style>
