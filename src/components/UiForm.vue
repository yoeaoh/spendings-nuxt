<script lang="ts" setup>
defineProps<{
    action: () => void;
    title: string;
}>();
</script>

<template>
    <form class="ui-form" @submit.prevent="action">
        <h3 class="ui-form__title">{{ title }}</h3>

        <div class="ui-form__fields">
            <slot></slot>
        </div>

        <UButton color="indigo" type="submit" class="self-end"
            >Добавить</UButton
        >
    </form>
</template>

<style lang="scss" scoped>
.ui-form {
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(
        30deg,
        hsl(213, 49%, 12%),
        hsl(212, 38%, 15%)
    );
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &__title {
        font-family: "Inter";
        color: white;
        font-size: 1rem;
        font-weight: 500;
    }

    &__fields {
        display: grid;
        grid-template-columns: max-content auto;
        row-gap: 0.25rem;
    }
}
</style>
