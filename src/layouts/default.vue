<script lang="ts" setup></script>

<template>
    <div class="default-layout">
        <div class="default-layout__sidebar default-layout-sidebar">
            <div class="default-layout-sidebar__logo">
                <NuxtLink :to="'/'">
                    Spend /
                </NuxtLink>
            </div>

            <!-- <hr class="default-layout-sidebar__divider" /> -->

            <nav>
                <ul class="default-layout-sidebar__menu default-layout-sidebar-menu">
                    <li>
                        <NuxtLink :to="'dashboard'">
                            <Icon name="ph:grid-four-bold" class="default-layout-sidebar-menu__icon" />
                            <span class="default-layout-sidebar-menu__text">Обзор</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'spendings'">
                            <Icon name="ph:trend-down-bold" class="default-layout-sidebar-menu__icon" />
                            <span class="default-layout-sidebar-menu__text">Расходы</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'categories'">
                            <Icon name="ph:list-bold" class="default-layout-sidebar-menu__icon" />
                            <span class="default-layout-sidebar-menu__text">Категории</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="'incomes'">
                            <Icon name="ph:trend-up-bold" class="default-layout-sidebar-menu__icon" />
                            <span class="default-layout-sidebar-menu__text">Доходы</span>
                        </NuxtLink>
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
        background-image: linear-gradient(150deg, hsl(0, 0%, 100%), hsl(0, 0%, 50%));
        // background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__divider {
        border-top: 1px solid hsla(100, 100%, 100%, 0.05);
        margin-bottom: 1rem;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
    }
}

.default-layout-sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    li > a {
        display: flex;
        align-items: center;
        padding: 0.75rem 0.5rem;
        font-weight: 600;
        border-radius: 0.5rem;
        // font-size: 0.75rem;
        gap: 0.5rem;
        // text-transform: uppercase;

        &:hover {
            background-color: hsl(212, 42%, 14%);
        }
    }

    &__icon {
        font-size: 1.5rem;
    }
}
</style>
