<template>
    <div class="total-card">Остаток: {{ totalIncome - totalSpendings }}</div>
</template>

<script lang="ts" setup>
defineProps<{
    totalIncome: number;
    totalSpendings: number;
}>();
</script>

<style lang="scss" scoped>
.total-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #2d1c63;
}
</style>
