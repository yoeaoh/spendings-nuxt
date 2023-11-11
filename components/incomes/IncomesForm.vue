<template>
    <form @submit.prevent="addIncome" class="incomes-form">
        <h3 class="incomes-form__title">Добавить приход:</h3>

        <div class="incomes-form__fields">
            <div class="incomes-form__item incomes-form-item">
                <span class="incomes-form-item__title">Название</span>

                <input
                    v-model="name"
                    type="text"
                    class="incomes-form-item__input"
                    placeholder="Название"
                />
            </div>

            <div class="incomes-form__item incomes-form-item">
                <span class="incomes-form-item__title">Сумма</span>

                <input
                    v-model="sum"
                    type="number"
                    class="incomes-form-item__input"
                    placeholder="Сумма прихода"
                />
            </div>

            <div class="incomes-form__item incomes-form-item">
                <span class="incomes-form-item__title">Дата</span>

                <input
                    v-model="date"
                    type="date"
                    class="incomes-form-item__input"
                />
            </div>
        </div>

        <button class="incomes-form__button" type="submit">Добавить</button>
    </form>
</template>

<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
const emit = defineEmits(['addIncome']);

const name: Ref<string> = ref('');
const sum: Ref<number> = ref(0);
const date: Ref<string> = ref(formatDate());

const addIncome = () => {
    emit('addIncome', {
        id: Date.now().toString(),
        sum: sum.value,
        date: date.value,
    });

    name.value = '';
    sum.value = 0;
};
</script>

<style lang="scss" scoped>
.incomes-form {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #28631c;

    &__title {
        font-family: 'Raleway';
        color: white;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    &__fields {
        display: grid;
        grid-template-columns: max-content auto;
        row-gap: 0.5rem;
        margin-bottom: 1rem;
    }

    &__button {
        padding: 0.5rem 1rem;
        border: 1px solid black;
        border-radius: 3px;
        width: 100%;
    }
}

.incomes-form-item {
    display: contents;

    &__title {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 0.5rem 0.5rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    &__input {
        padding: 0 0.5rem;
        border: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        background-color: rgba(255, 255, 255, 0.75);
        outline: 0;
    }
}
</style>
