<script lang="ts" setup>
const props = defineProps<{
    rows: any[];
    columns: string[];
}>();
</script>

<template>
    <div
        class="ui-table"
        :style="{
            gridTemplateColumns: `repeat(${columns.length}, minmax(10rem, auto))`,
        }"
    >
        <div class="ui-table__heading">
            <div class="ui-table__row">
                <!-- Поменять ключи -->
                <div
                    v-for="column in columns"
                    :key="column"
                    class="ui-table__cell ui-table__header-cell"
                >
                    {{ column }}
                </div>
            </div>
        </div>

        <div class="ui-table__body">
            <!-- Поменять ключи ? -->
            <div v-for="row in rows" class="ui-table__row">
                <div
                    v-for="column in columns"
                    :key="row.id"
                    class="ui-table__cell"
                >
                    {{ row[column] }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ui-table {
    display: grid;
    border-radius: 0.5rem;

    &__heading {
        display: contents;

        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &__body {
        display: contents;

        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }

    &__row {
        display: contents;

        &:first-child {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }

        &:last-child {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
        }
    }

    &__cell {
        padding: 0.5rem 1rem;
        background-color: hsla(100, 100%, 100%, 0.1);
        border-bottom: 1px solid hsla(100, 100%, 100%, 0.3);

        &:first-child {
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
        }

        &:last-child {
            border-top-right-radius: inherit;
            border-bottom-right-radius: inherit;
        }
    }

    &__header-cell {
        // background-color: #162433;
        background-color: hsla(100, 100%, 100%, 0.3);
    }
}
</style>
