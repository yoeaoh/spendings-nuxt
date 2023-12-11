<script lang="ts" setup></script>

<template>
    <div class="default-layout">
        <div class="default-layout__sidebar default-layout-sidebar">
            <div class="default-layout-sidebar__logo">Spend /</div>

            <hr class="default-layout-sidebar__divider" />

            <nav>
                <ul class="default-layout-sidebar__menu">
                    <li>
                        <NuxtLink :to="'dashboard'">Обзор</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'spendings'">Расходы</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'categories'">Категории</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'incomes'">Доходы</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="default-layout__content default-layout-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: grid;
    grid-template-columns: 12rem auto;
    min-height: 100vh;

    &__content {
        box-shadow: -0.5rem 0 1rem 0 hsla(0, 0%, 0%, 0.25);
    }
}

.default-layout-sidebar {
    padding: 1rem;
    background-color: hsla(0, 0%, 0%, 0.5);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__logo {
        font-family: 'Bebas Neue';
        font-size: 3.25rem;
    }

    &__divider {
        border-top: 1px solid hsla(100, 100%, 100%, 0.05);
        margin-bottom: 1rem;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        li>a {
            display: block;
            font-family: 'Inter';
            font-weight: 600;
            text-transform: uppercase;
            // font-size: 1.15rem;
        }
    }
}
</style>
