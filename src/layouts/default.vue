<script lang="ts" setup></script>

<template>
    <div class="default-layout">
        <UiSidebar class="default-layout__sidebar" />

        <div class="default-layout__content default-layout-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 100vh;
    position: relative;

    &__sidebar {
        position: sticky;
        top: 0;
        left: 0;
    }
}

.default-layout-content {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
}
</style>
