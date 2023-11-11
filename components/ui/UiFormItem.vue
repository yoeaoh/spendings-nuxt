<template>
    <div class="ui-form-item">
        <span class="ui-form-item__title">
            {{ title }}
        </span>

        <div class="ui-form-item__input">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string;
}>();
</script>

<style lang="scss" scoped>
.ui-form-item {
    display: contents;

    &__title {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 0.5rem 0.5rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    &__input {
        display: flex;

        :deep(input),
        :deep(select) {
            flex-grow: 1;
            padding: 0 0.5rem;
            border: 0;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            background-color: rgba(255, 255, 255, 0.75);
            outline: 0;
        }
    }
}
</style>
