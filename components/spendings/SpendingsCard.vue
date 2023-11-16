<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';

defineProps<{
    spending: ISpending;
}>();

const isModalVisible = ref(false);

function closeModal() {
    isModalVisible.value = false;
}

function openModal() {
    isModalVisible.value = true;
}

// При клике на карточку разворачивать модалку.
// Далее, в модалке добавляются траты, закреплённые к этой карточке и
// к категории карточки. В карточке соответствующей категории автоматически
// добавляются подкатегории с уникальными названиями товаров. Потом из суммы
// можно вычитать несхождение с финальным чеком и записывать это в скидку.

// В дополнительную информацию можно добавлять теги.
</script>

<template>
    <div class="spendings-item" @click="openModal">
        <div class="spendings-item__category">
            {{ spending.category.name }}
        </div>

        <div class="spendings-item__sum">
            {{ spending.sum }}<span class="spendings-item__currency">руб</span>
        </div>

        <div v-if="spending.description" class="spendings-item__description">
            {{ spending.description }}
        </div>

        <div class="spendings-item__date">
            {{ spending.date }}
        </div>
    </div>

    <Teleport to="body" v-if="isModalVisible">
        <UiModal @close="closeModal">
            <template #header>
                <h3>Добавить траты по чеку</h3>
            </template>

            <template #body>
                <SpendingsForm />
            </template>
        </UiModal>
    </Teleport>
</template>

<style lang="scss" scoped>
.spendings-item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #611c63;
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__category {
        font-size: 1.25rem;
    }

    &__sum {
        font-size: 3rem;
    }

    &__currency {
        font-size: 1rem;
    }

    &__date {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
