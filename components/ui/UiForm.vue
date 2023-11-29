<script lang="ts" setup>
defineProps<{
    action: () => void;
    title: string;
}>();
</script>

<template>
    <form @submit.prevent="action" class="ui-form">
        <h3 class="ui-form__title">{{ title }}</h3>

        <div class="ui-form__fields">
            <slot></slot>
        </div>

        <button class="ui-form__button" type="submit">Добавить</button>
    </form>
</template>

<style lang="scss" scoped>
.ui-form {
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(30deg, hsl(213, 49%, 12%), hsl(212, 38%, 15%));
    border: 1px solid hsla(0, 0%, 100%, 0.1);

    &__title {
        font-family: 'Inter';
        color: white;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    &__fields {
        display: grid;
        grid-template-columns: max-content auto;
        row-gap: 0.25rem;
        margin-bottom: 0.5rem;
    }

    &__button {
        padding: 0.25rem 0.5rem;
        background-color: transparent;
        background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.2));
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        color: hsl(0 ,0% ,100%);
        border-radius: 3px;
        width: 100%;
        font-size: 0.75rem;
        font-family: 'Inter';

        &:hover,
        &:focus {
            background-image: linear-gradient(30deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.2));
            outline: 0;
            border: 1px solid hsla(0, 0%, 100%, 0.3);
        }
    }
}
</style>
