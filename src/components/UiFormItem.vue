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
            <slot />
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
        color: white;
        text-align: right;
        padding-right: 0.5rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
    }

    &__error {
        grid-column: 2 / 3;
        font-size: 0.75rem;
        color: rgb(255, 112, 112);
    }
}
</style>
