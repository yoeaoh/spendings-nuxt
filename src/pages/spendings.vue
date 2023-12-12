<script lang="ts" setup>
import { useSpendingsStore } from "~/store/spendings.store";

const spendings = useSpendingsStore();
</script>

<template>
    <div class="spendings-page">
        <div>
            {{ spendings }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
