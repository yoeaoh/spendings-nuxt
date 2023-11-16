<template>
    <div class="total-card">Остаток: {{ totalIncome - totalSpendings }}</div>
</template>

<script lang="ts" setup>
const totalIncome = inject<number>('totalIncome', 0);
const totalSpendings = inject<number>('totalSpendings', 0);
</script>

<style lang="scss" scoped>
.total-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #2d1c63;
}
</style>
