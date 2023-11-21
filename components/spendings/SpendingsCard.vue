<script lang="ts" setup>
import { ISpending, ISubSpending } from '~/interfaces/spending.interface';

const props = defineProps<{
    spending: ISpending;
}>();

const isModalOpen = ref<Boolean>(false);

function openCardModal() {
    isModalOpen.value = true;
}

function closeCardModal() {
    isModalOpen.value = false;
}

// При клике на карточку разворачивать модалку.
// Далее, в модалке добавляются траты, закреплённые к этой карточке и
// к категории карточки. В карточке соответствующей категории автоматически
// добавляются подкатегории с уникальными названиями товаров. Потом из суммы
// можно вычитать несхождение с финальным чеком и записывать это в скидку.

// В дополнительную информацию можно добавлять теги.

// Добавить ограничение в subSpendings, чтобы сумма подкатегорий не могла быть
// больше, чем сумма траты.
</script>

<template>
    <div class="spendings-item" @click="openCardModal">
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

        <ul>
            <li
                v-for="subSpending in spending.subSpendings"
                :key="subSpending.id"
            >
                {{ subSpending.name }} - {{ subSpending.sum }}
            </li>
        </ul>

        <SpendingsCardModal
            @close="closeCardModal"
            :isModalOpen="isModalOpen"
            :spending="spending"
        />
    </div>
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
