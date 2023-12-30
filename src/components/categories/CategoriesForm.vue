<script lang="ts" setup>
import { type ICategory } from "~/interfaces/category.interface";
import { useCategoriesStore } from "~/store/categories.store";

const categories = useCategoriesStore();

// Добавлять дефолтную категорию "Без категории"
// только если при добавлении расхода не будет выбрано категории
// (если так можно вообще)

const name = ref<string>("");
const errors: Ref<{ name: string }> = ref({ name: "" });

const checkName = () => {
    if (name.value.length <= 1) {
        errors.value.name = "Слишком короткое имя";
        return false;
    }

    if (categories.items.find((c: ICategory) => c.name === name.value)) {
        errors.value.name = "Такое имя уже используется";
        return false;
    }

    errors.value.name = "";
    return true;
};

function addCategory() {
    const isNameValid = checkName();

    if (!isNameValid) return;

    const newCategory = {
        id: Date.now().toString(),
        name: name.value,
        sum: 0,
        subCategories: [],
    };

    categories.addNewItem(newCategory);

    name.value = "";
}
</script>

<template>
    <UiForm :action="addCategory" title="Добавить категорию:">
        <UiFormItem title="Название" :error="errors.name">
            <UInput
                v-model="name"
                placeholder="Название категории"
                type="text"
                maxlength="30"
                required
            />
        </UiFormItem>
    </UiForm>
</template>
