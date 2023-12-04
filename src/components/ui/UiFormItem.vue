<script lang="ts" setup>
defineProps<{
    title: string;
    error?: string;
}>();
</script>

<template>
    <div class="ui-form-item">
        <span class="ui-form-item__title">
            {{ title }}
        </span>

        <div class="ui-form-item__input">
            <slot></slot>
        </div>

        <div v-if="error" class="ui-form-item__error">
            {{ error }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ui-form-item {
    display: contents;

    &__title {
        background-color: hsla(0, 0%, 0%, 0.5);
        color: white;
        padding: 0.25rem 0.5rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
    }

    &__input {
        display: flex;
        min-width: 0;

        :deep(div),
        :deep(input),
        :deep(select) {
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            color: hsla(0, 0%, 0%, 1);
            min-width: 0;
            flex-grow: 1;
            border: 0;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            background-color: hsla(0, 0%, 100%, 0.75);
            outline: 0;
        }

        :deep(select) {
            padding: 0.5rem 0.25rem;
        }

        :deep(div),
        :deep(input) {
            padding: 0.5rem 0.5rem;
        }
    }

    &__error {
        grid-column: 2 / 3;
        font-size: 0.75rem;
        color: rgb(255, 112, 112);
    }
}
</style>
