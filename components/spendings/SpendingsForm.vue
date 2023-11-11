<template>
    <form @submit.prevent="addSpending" class="spendings-form">
        <h3 class="spendings-form__title">Добавить трату:</h3>

        <div class="spendings-form__fields">
            <div class="spendings-form__item spendings-form-item">
                <span class="spendings-form-item__title">Сумма</span>

                <input
                    v-model="sum"
                    type="number"
                    step=".01"
                    class="spendings-form-item__input"
                    placeholder="Сумма траты"
                />
            </div>

            <div class="spendings-form__item spendings-form-item">
                <span class="spendings-form-item__title">Дата</span>

                <input
                    v-model="date"
                    type="date"
                    class="spendings-form-item__input"
                />
            </div>

            <div class="spendings-form__item spendings-form-item">
                <span class="spendings-form-item__title">Категория</span>

                <select v-model="category" class="spendings-form-item__input">
                    <option selected disabled>Выберите категорию:</option>
                    <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.name"
                    >
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <div class="spendings-form__item spendings-form-item">
                <span class="spendings-form-item__title">Описание</span>

                <input
                    v-model="description"
                    type="text"
                    class="spendings-form-item__input"
                    placeholder="Дополнительная информация"
                />
            </div>
        </div>

        <button class="spendings-form__button" type="submit">Добавить</button>
    </form>
</template>

<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
import { ICategory } from '~/interfaces/category.interface';
const emit = defineEmits(['addSpending']);

const props = defineProps<{
    categories: ICategory[];
}>();

const sum: Ref<number> = ref(0);
const date: Ref<string> = ref(formatDate());
const category: Ref<string> = ref('');
const description: Ref<string> = ref('');

const isSumValid: Ref<Boolean> = ref(true);

const checkSum = () => {
    if (sum.value <= 0) {
        isSumValid.value = false;
        return false;
    }

    isSumValid.value = true;
    return true;
};

const addSpending = () => {
    if (!checkSum()) return;

    emit('addSpending', {
        id: Date.now().toString(),
        sum: sum.value,
        date: date.value,
        category: category.value,
        description: description.value,
    });

    sum.value = 0;
    description.value = '';
};
</script>

<style lang="scss" scoped>
.spendings-form {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #2d1c63;

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

.spendings-form-item {
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
