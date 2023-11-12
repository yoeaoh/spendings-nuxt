<template>
    <UiForm :action="addCategory" title="Добавить категорию:">
        <UiFormItem title="Название">
            <input
                v-model="name"
                placeholder="Название категории"
                type="text"
            />
        </UiFormItem>
    </UiForm>
</template>

<script lang="ts" setup>
const emit = defineEmits(['addCategory']);

const name: Ref<string> = ref('');
const isNameValid: Ref<Boolean> = ref(true);

const checkName = () => {
    if (name.value.length <= 1) {
        isNameValid.value = false;
        return false;
    }

    isNameValid.value = true;
    return true;
};

const addCategory = () => {
    if (!checkName()) return;

    emit('addCategory', {
        id: Date.now().toString(),
        name: name.value,
    });

    name.value = '';
};
</script>
