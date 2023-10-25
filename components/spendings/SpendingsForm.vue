<template>
    <form @submit.prevent="addSpending" class="spendings__form spendings-form">
        <h3 class="spendings-form__title">Добавить трату:</h3>

        <div class="spendings-form__item spendings-form-item">
            <h4 class="spendings-form-item__title">Сумма:</h4>

            <input
                v-model="sum"
                type="number"
                class="spendings-form-item__input"
            />
        </div>

        <div class="spendings-form__item spendings-form-item">
            <h4 class="spendings-form-item__title">Дата:</h4>

            <input
                v-model="date"
                type="date"
                class="spendings-form-item__input"
            />
        </div>

        <div class="spendings-form__item spendings-form-item">
            <h4 class="spendings-form-item__title">Категория:</h4>

            <input
                v-model="category"
                type="text"
                class="spendings-form-item__input"
            />
        </div>

        <div class="spendings-form__item spendings-form-item">
            <h4 class="spendings-form-item__title">Описание:</h4>

            <input
                v-model="description"
                type="text"
                class="spendings-form-item__input"
            />
        </div>

        <button>Добавить</button>
    </form>
</template>

<script lang="ts" setup>
const sum = ref(0);
const date = ref(Date.now().toString());
const category = ref('');
const description = ref('');

const emit = defineEmits(['addSpending']);

const addSpending = () => {
    emit('addSpending', {
        sum: unref(sum),
        date: unref(date),
        category: unref(category),
        description: unref(description),
    });
};
</script>

<style lang="scss" scoped>
.spendings-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
}

.spendings-form-item {
    display: flex;

    &__title {
        width: 120px;
        background-color: black;
        color: white;
    }

    &__input {
        width: 100%;
    }
}
</style>
