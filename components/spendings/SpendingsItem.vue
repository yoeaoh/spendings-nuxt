<template>
    <div class="spendings-item">
        <div class="spendings-item__category">
            {{ spending.category }}
        </div>

        <div class="spendings-item__sum">
            {{ spending.sum }}
        </div>

        <div v-if="spending.description" class="spendings-item__description">
            {{ spending.description }}
        </div>

        <div class="spendings-item__date">
            {{ spending.date }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';

const props = defineProps<{
    spending: ISpending;
}>();
</script>

<style lang="scss" scoped>
.spendings-item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #611c63;
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__category {
        font-size: 1.25rem;
    }

    &__sum {
        font-size: 3rem;
    }

    &__description {
    }

    &__date {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
