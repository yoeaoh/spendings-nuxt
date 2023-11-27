<template>
    <div class="total-card">
        Остаток: 
        <span class="total-card__sum">
            {{ totalIncome - totalSpendings }}
        </span>
        </div>
</template>

<script lang="ts" setup>
const totalIncome = inject<number>('totalIncome', 0);
const totalSpendings = inject<number>('totalSpendings', 0);
</script>

<style lang="scss" scoped>
.total-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(30deg, hsl(213, 49%, 12%), hsl(212, 38%, 15%));
    border: 1px solid hsla(0, 0%, 100%, 0.1);

    &__sum {
        font-weight: 600;
    }
}
</style>
