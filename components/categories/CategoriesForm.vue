<script lang="ts" setup>
import { ICategory } from '~/interfaces/category.interface';

const categories = inject<ICategory[]>('categories', []);
const addNewCategory = inject<(category: ICategory) => void>(
    'addNewCategory',
    () => {},
);

const name = ref<string>('');
const errors: { name: string } = reactive({ name: '' });

const checkName = () => {
    if (name.value.length <= 1) {
        errors.name = 'Слишком короткое имя';
        return false;
    }

    if (categories.find((c: ICategory) => c.name === name.value)) {
        errors.name = 'Такое имя уже используется';
        return false;
    }

    errors.name = '';
    return true;
};

function addCategory() {
    const isNameValid = checkName();

    if (!isNameValid) return;

    const newCategory = {
        id: Date.now().toString(),
        name: name.value,
        sum: 0,
    };

    addNewCategory(newCategory);

    name.value = '';
}
</script>

<template>
    <UiForm :action="addCategory" title="Добавить категорию:">
        <UiFormItem title="Название" :error="errors.name">
            <input
                v-model="name"
                placeholder="Название категории"
                type="text"
                maxlength="30"
                required
            />
        </UiFormItem>
    </UiForm>
</template>
