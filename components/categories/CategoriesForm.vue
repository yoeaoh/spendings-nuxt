<template>
    <form @submit.prevent="addCategory" class="categories-form">
        <h3 class="categories-form__title">Добавить категорию:</h3>

        <div class="categories-form__fields">
            <div class="categories-form__item categories-form-item">
                <span class="categories-form-item__title">Название</span>

                <input
                    v-model="name"
                    class="categories-form-item__input"
                    placeholder="Название категории"
                    type="text"
                />
            </div>
        </div>

        <button class="categories-form__button" type="submit">Добавить</button>
    </form>
</template>

<script lang="ts" setup>
const emit = defineEmits(['addCategory']);

const name: Ref<string> = ref('');
const isNameValid: Ref<Boolean> = ref(true);

const checkName = () => {
    if (unref(name).length <= 1) {
        isNameValid.value = false;
        return false;
    }

    isNameValid.value = true;
    return true;
};

const categoriesFormSumInputClasses = computed(() => ({
    'categories-form-item--has-error': !unref(isNameValid),
}));

const addCategory = () => {
    if (!checkName()) return;

    emit('addCategory', {
        id: new Date().toString(),
        name: unref(name),
    });

    name.value = '';
};
</script>

<style lang="scss" scoped>
.categories-form {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #1c6338;
    margin-bottom: 1rem;

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

.categories-form-item {
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

        &::placeholder {
            color: rgb(63, 63, 63);
        }
    }
}
</style>
