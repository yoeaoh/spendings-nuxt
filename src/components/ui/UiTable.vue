<script lang="ts" setup>
const props = defineProps<{
    rows: any[];
    columns: string[];
}>();
</script>

<template>
    <table class="ui-table">
        <thead class="ui-table__heading">
            <tr class="ui-table__row">
                <!-- Поменять ключи -->
                <th v-for="column in columns" :key="column" class="ui-table__header-cell">{{ column }}</th>
            </tr>
        </thead>

        <tbody class="ui-table__body">
            <!-- Поменять ключи ? -->
            <tr v-for="row in rows" class="ui-table__row">
                <td v-for="column in columns" :key="row.id" class="ui-table__cell">{{ row[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.ui-table {
    border: 1px solid hsl(100, 100%, 100%);

    &__heading {
        // border: 1px solid hsl(100, 100%, 100%);
    }

    &__body {
        // border: 1px solid hsl(100, 100%, 100%);
    }

    &__row {
        // border: 1px solid hsl(100, 100%, 100%);
    }

    &__cell {
        border: 1px solid hsl(100, 100%, 100%);
        padding: 0.5rem 1rem;
    }

    &__header-cell {
        border: 1px solid hsl(100, 100%, 100%);
        padding: 0.5rem 1rem;
    }
}
</style>