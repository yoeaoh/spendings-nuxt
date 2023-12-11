<script lang="ts" setup>
defineProps<{
    totalValue: number;
}>();
</script>

<template>
    <div class="total-card">
        <div class="total-card__container">
            Всего:
            <span class="total-card__sum">
                {{ totalValue }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.total-card {
    background-image: linear-gradient(0deg,
            hsl(231, 78%, 7%) 4rem,
            transparent);

    &__container {
        background-image: linear-gradient(30deg,
                hsl(213, 49%, 12%),
                hsl(212, 38%, 15%));
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
    }

    &__sum {
        font-weight: 600;
    }
}
</style>
