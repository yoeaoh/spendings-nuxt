<script lang="ts" setup>
import { formatDate } from '~/helpers/date.helper';
import {
    type ISpending,
    type ISubSpending,
} from '~/interfaces/spending.interface';

const props = defineProps<{
    spending: ISpending;
}>();

const isModalOpen = ref<Boolean>(false);
const isCardOpen = ref<Boolean>(false);
const isButtonHovered = ref<Boolean>(false);

const availableSum = computed(() => {
    const subSpendingsSum = props.spending.subSpendings
        .reduce((sum: number, currSpending: ISubSpending) => {
            return sum + currSpending.sum;
        }, 0);

    const availableSum = props.spending.sum - subSpendingsSum;

    return Number.parseFloat(availableSum.toFixed(2));
});

const cardButtonText = computed(() =>
    isCardOpen.value ? 'Закрыть ⇡' : 'Открыть ⇣',
);

const formattedDate = computed(() => formatDate(new Date(props.spending.date)));

const hasSubSpendings = computed(() => props.spending.subSpendings.length);

function openCardModal() {
    isModalOpen.value = true;
}

function closeCardModal() {
    isModalOpen.value = false;
}

const spendingsCardClasses = computed(() => ({
    'spendings-card--hover': isButtonHovered.value,
}));

// В карточке соответствующей категории автоматически
// добавляются подкатегории с уникальными названиями товаров.

// Потом из суммы
// можно вычитать несхождение с финальным чеком и записывать это в скидку.

// В дополнительную информацию можно добавлять теги.
</script>

<template>
    <div class="spendings-card" :class="spendingsCardClasses">
        <div class="spendings-card__container" @click="openCardModal">
            <div class="spendings-card__category spendings-card-category">
                <div class="spendings-card-category__text">
                    {{ spending.category.name }}
                </div>
            </div>

            <div class="spendings-card__sum">
                {{ spending.sum }}<span class="spendings-card__currency">BYN</span>
            </div>

            <div v-if="spending.description" class="spendings-card__description">
                {{ spending.description }}
            </div>

            <div class="spendings-card__date">
                {{ formattedDate }}
            </div>
        </div>

        <button v-if="hasSubSpendings" @mouseover="isButtonHovered = true" @mouseleave="isButtonHovered = false"
            @click="isCardOpen = !isCardOpen" class="spendings-card__button">
            {{ cardButtonText }}
        </button>

        <ul v-if="isCardOpen" class="spendings-card__sub-spendings spendings-card-sub-spendings">
            <li>
                ▹ Осталось по чеку: {{ availableSum }}<span class="spendings-card-sub-spendings__currency">BYN</span>
            </li>

            <li v-for="subSpending in spending.subSpendings" :key="subSpending.id">
                ▹ {{ subSpending.name }} — <span class="spendings-card-sub-spendings__sum">{{ subSpending.sum }}</span>

                <span class="spendings-card-sub-spendings__currency">BYN</span>
            </li>
        </ul>

        <SpendingsCardModal @close="closeCardModal" :availableSum="availableSum" :isModalOpen="isModalOpen"
            :spending="spending" />
    </div>
</template>

<style lang="scss" scoped>
.spendings-card {
    display: flex;
    flex-direction: column;
    background-color: hsl(298, 56%, 25%);
    border-radius: 0.5rem;

    &__container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        background-image: linear-gradient(120deg,
                hsl(298, 56%, 25%),
                hsl(298, 56%, 15%));
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        color: white;
        border-radius: 0.5rem;
        gap: 0.25rem;

        &:hover {
            background-image: linear-gradient(30deg,
                    hsl(298, 56%, 35%),
                    hsl(298, 56%, 15%));
            cursor: pointer;
            border: 1px solid hsla(0, 0%, 100%, 0.5);
        }
    }

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

    &__button {
        background-color: transparent;
        border: 0;
        padding: 0.5rem;
        color: hsla(0, 0%, 100%, 1);
        border-radius: 0.5rem;

        &:hover {
            cursor: pointer;
        }
    }

    &--hover {
        background-color: hsl(298, 56%, 30%);
    }

    &__sub-spendings {
        border-top: 1px dashed hsla(0, 0%, 100%, 0.2);
        padding: 0.5rem;
        margin-top: 0.25rem;
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

.spendings-card-sub-spendings {
    &__sum {
        font-weight: 600;
    }

    &__currency {
        margin-left: 0.2rem;
        font-size: 0.75rem;
    }
}
</style>
