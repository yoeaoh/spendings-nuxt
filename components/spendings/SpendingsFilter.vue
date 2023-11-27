<script lang="ts" setup>
enum filterVariants {
    ASC = 'ascending',
    DESC = 'descending'
};

const selectedFilter: Ref<filterVariants> = ref(filterVariants.ASC);

function changeFilterValue () {
    if (selectedFilter.value === filterVariants.ASC) {
        selectedFilter.value = filterVariants.DESC;
        return;
    };

    if (selectedFilter.value === filterVariants.DESC) {
        selectedFilter.value = filterVariants.ASC;
        return;
    };
}
</script>

<template>
    <div class="spendings-filter">
        <button @click="changeFilterValue" class="spendings-filter__button">
            {{ selectedFilter }}
        </button>
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