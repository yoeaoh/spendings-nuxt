<script lang="ts" setup>
import { useGlobalStore } from "~/store/global.store";

// TODO: Добавить стор для тёмной темы
const globalStore = useGlobalStore();
const { theme, isSidebarOpen } = storeToRefs(globalStore);
const { toggleTheme, toggleSidebar } = globalStore;

const themeIcon = computed(() =>
    theme.value === "light" ? "ph:sun-bold" : "ph:moon-bold",
);

const sidebarLogoText = computed(() =>
    isSidebarOpen.value ? "/ Spend" : "/S",
);

const sidebarClasses = computed(() => ({
    "sidebar--open": isSidebarOpen.value,
    "sidebar--compact": !isSidebarOpen.value,
}));

const sidebarMenuIconClasses = computed(() => ({
    "sidebar-menu__item--compact": !isSidebarOpen.value,
}));

const sidebarTogglesClasses = computed(() => ({
    "sidebar__toggles--compact": !isSidebarOpen.value,
}));

const sidebarButtonToggleClasses = computed(() => ({
    "sidebar__button-toggle--compact": !isSidebarOpen.value,
}));
</script>

<template>
    <div :class="sidebarClasses" class="sidebar">
        <div class="sidebar__start">
            <div class="sidebar__logo">
                <NuxtLink :to="'/'">
                    {{ sidebarLogoText }}
                </NuxtLink>
            </div>

            <hr class="sidebar__divider" />

            <nav>
                <ul class="sidebar__menu sidebar-menu">
                    <li>
                        <NuxtLink
                            :to="'dashboard'"
                            :class="sidebarMenuIconClasses"
                            title="Обзор"
                            class="sidebar-menu__item"
                        >
                            <Icon
                                name="ph:grid-four-bold"
                                class="sidebar-menu__icon"
                            />

                            <span
                                v-if="isSidebarOpen"
                                class="sidebar-menu__text"
                            >
                                Обзор
                            </span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            :to="'categories'"
                            :class="sidebarMenuIconClasses"
                            title="Категории"
                            class="sidebar-menu__item"
                        >
                            <Icon
                                name="ph:list-bold"
                                class="sidebar-menu__icon"
                            />

                            <span
                                v-if="isSidebarOpen"
                                class="sidebar-menu__text"
                            >
                                Категории
                            </span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            :to="'spendings'"
                            :class="sidebarMenuIconClasses"
                            title="Расходы"
                            class="sidebar-menu__item"
                        >
                            <Icon
                                name="ph:trend-down-bold"
                                class="sidebar-menu__icon"
                            />

                            <span
                                v-if="isSidebarOpen"
                                class="sidebar-menu__text"
                            >
                                Расходы
                            </span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            :to="'incomes'"
                            :class="sidebarMenuIconClasses"
                            title="Доходы"
                            class="sidebar-menu__item"
                        >
                            <Icon
                                name="ph:trend-up-bold"
                                class="sidebar-menu__icon"
                            />

                            <span
                                v-if="isSidebarOpen"
                                class="sidebar-menu__text"
                            >
                                Доходы
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="sidebar__end">
            <div :class="sidebarTogglesClasses" class="sidebar__toggles">
                <button
                    @click="toggleSidebar"
                    type="button"
                    :class="sidebarButtonToggleClasses"
                    class="sidebar__button-toggle sidebar__button-toggle-sidebar"
                >
                    <Icon name="ph:sidebar-simple-bold" />
                </button>

                <button
                    @click="toggleTheme"
                    type="button"
                    :class="sidebarButtonToggleClasses"
                    class="sidebar__button-toggle sidebar__button-toggle-theme"
                >
                    <Icon :name="themeIcon" />
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    max-height: 100vh;
    padding: 1rem;
    background-color: hsla(0, 0%, 0%, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__start {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__logo {
        font-family: "Bebas Neue";
        font-size: 3.25rem;
        background-image: linear-gradient(
            150deg,
            hsl(0, 0%, 100%),
            hsl(0, 0%, 50%)
        );
        // background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__divider {
        border-top: 1px solid hsla(100, 100%, 100%, 0.1);
        margin-bottom: 1rem;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
    }

    &__toggles {
        display: flex;
        width: 100%;

        &--compact {
            flex-direction: column-reverse;
            gap: 0.5rem;
        }
    }

    &__button-toggle {
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;

        &:hover {
            background-color: hsl(212, 42%, 14%);
            cursor: pointer;
        }

        &--compact {
            width: 100%;
        }
    }

    &__button-toggle-sidebar {
    }

    &__button-toggle-theme {
        margin-left: auto;
    }

    &--open {
        min-width: 12rem;
    }

    &--compact {
        max-width: 5rem;
    }
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &__item {
        &--compact {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    li > a {
        display: flex;
        align-items: center;
        padding: 0.75rem 0.5rem;
        font-weight: 600;
        border-radius: 0.5rem;
        gap: 0.5rem;
        // font-size: 0.75rem;
        // text-transform: uppercase;

        &:hover {
            background-color: hsl(212, 42%, 14%);
        }
    }

    &__icon {
        font-size: 1.25rem;
    }
}
</style>
