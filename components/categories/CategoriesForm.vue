<script lang="ts" setup>
import { ICategory } from '~/interfaces/category.interface';

const emit = defineEmits(['addCategory']);

const props = defineProps<{
    categories: ICategory[];
}>();

const name = ref<string>('');
const errors: { name: string } = reactive({ name: '' });

const checkName = () => {
    if (name.value.length <= 1) {
        errors.name = 'Слишком короткое имя';
        return false;
    }

    if (props.categories.find((c: ICategory) => c.name === name.value)) {
        errors.name = 'Такое имя уже используется';
        return false;
    }

    errors.name = '';
    return true;
};

const addCategory = () => {
    const isNameValid = checkName();

    if (!isNameValid) return;

    emit('addCategory', {
        id: Date.now().toString(),
        name: name.value,
        sum: 0,
    });

    name.value = '';
};
</script>

<template>
    <UiForm :action="addCategory" title="Добавить категорию:">
        <UiFormItem title="Название" :error="errors.name">
            <input
                v-model="name"
                placeholder="Название категории"
                type="text"
            />
        </UiFormItem>
    </UiForm>
</template>
