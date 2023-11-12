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
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #2d1c63;

    &__title {
        font-family: 'Raleway';
        color: white;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    &__fields {
        display: grid;
        grid-template-columns: max-content auto;
        row-gap: 0.5rem;
        margin-bottom: 1rem;
    }

    &__button {
        padding: 0.5rem 1rem;
        border: 1px solid black;
        border-radius: 3px;
        width: 100%;
    }
}
</style>
