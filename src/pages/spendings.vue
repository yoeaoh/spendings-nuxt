<script lang="ts" setup>
import type { ISpending, ISubSpending } from "~/interfaces/spending.interface";
import { useSpendingsStore } from "~/store/spendings.store";

const spendings = useSpendingsStore();

const isFlattenToggle: Ref<Boolean> = ref(false);

// Добавить автоматическое разбиение по месяцам. (где даты будут
// только по выбранному месяцу)

// Добавить возможность добавлять трату через модалку (в сайдбаре)

// На странице с таблицей трат, добавить возможность редактировать трату
// (и добавлять подтраты).

// Возможно, нет необходимости раскрывать ПОДтраты на странице с таблицей трат

// Подключить mokky.dev для мок-данных

//
//

// В дальнейшем добавить возможность выбирать, какие колонки показывать
const visibleColumns = ["name", "sum", "date", "category"];

const computedSpendings: ComputedRef<
    Array<ISpending | ISubSpending> | Array<ISpending>
> = computed(() => {
    if (isFlattenToggle.value === true) {
        const flatSpendings = spendings.items
            .map((i: ISpending) => {
                if (i.subSpendings.length > 0) {
                    return i.subSpendings;
                }

                return [i];
            })
            .flat();

        return flatSpendings;
    }

    return spendings.items;
});

// TODO: Добавить самую крупную одноразовую покупку и т.д.
</script>

<template>
    <div class="spendings-page">
        <label for="is-flatten-toggle">
            Развернуть
            <input
                v-model="isFlattenToggle"
                name="is-flatten-toggle"
                type="checkbox"
            />
        </label>

        <UiTable :rows="computedSpendings" :columns="visibleColumns" />
    </div>
</template>

<style lang="scss" scoped>
.spendings-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
        font-size: 2rem;
        font-weight: 600;
    }
}
</style>
