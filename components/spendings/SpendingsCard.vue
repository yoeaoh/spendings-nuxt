<script lang="ts" setup>
import { ISpending } from '~/interfaces/spending.interface';

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
    <div class="spendings-card" @click="openCardModal">
        <div class="spendings-card__category spendings-card-category">
            <div class="spendings-card-category__text">
                {{ spending.category.name }}
            </div>
        </div>

        <div class="spendings-card__sum">
            {{ spending.sum }}<span class="spendings-card__currency"> BYN</span>
        </div>

        <div v-if="spending.description" class="spendings-card__description">
            {{ spending.description }}
        </div>

        <div class="spendings-card__date">
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
.spendings-card {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-image: linear-gradient(120deg, hsl(298, 56%, 25%), hsl(298, 56%, 15%));
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    color: white;
    border-radius: 0.5rem;
    gap: 0.25rem;

    &__sum {
        font-size: 1.25rem;
        font-weight: 600;
    }

    &__currency {
        font-size: 0.75rem;
    }

    &__date {
        display: flex;
        justify-content: flex-end;
        font-size: 0.75rem;
    }
}

.spendings-card-category {
    &__text {
        font-size: 0.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
