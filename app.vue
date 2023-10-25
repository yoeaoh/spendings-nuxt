<template>
    <div class="container">
        <div class="spendings">
            <SpendingsForm @addSpending="addSpending" />

            <div v-for="(item, index) in spendings" :key="index">
                {{ item.sum }}
            </div>
        </div>

        <div class="sum">sum</div>
    </div>
</template>

<script lang="ts" setup>
import SpendingsForm from './components/spendings/SpendingsForm.vue';

interface ISpending {
    sum: number;
    date: Date;
    category: string;
    description: string;
}

const spendings: any = reactive([]);

const addSpending = (spending: any) => {
    spendings.push(spending);
    console.log(unref(spendings));
};
</script>

<style lang="scss" scoped>
.container {
    background-color: red;
    width: 800px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    gap: 16px;
}

.spendings {
    background-color: yellow;
    flex-basis: 50%;
}

.total {
    background-color: blue;
    flex-basis: 50%;
}
</style>
