<script lang="ts" setup>
import type { ISpending, ISubSpending } from "~/interfaces/spending.interface";
import { useSpendingsStore } from "~/store/spendings.store";

const spendings = useSpendingsStore();
const { items } = spendings;

const isFlattenToggle: Ref<Boolean> = ref(false);

// В дальнейшем добавить возможность выбирать, какие колонки показывать
const visibleColumns = ['name', 'sum', 'date', 'category.name'];

const computedSpendings: ComputedRef<
    Array<ISpending | ISubSpending> | Array<ISpending>
> = computed(() => {
    if (isFlattenToggle.value === true) {
        const flatSpendings = items
            .map((i: ISpending) => {
                if (i.subSpendings.length > 0) {
                    return i.subSpendings;
                }

                return [i];
            })
            .flat();

        return flatSpendings;
    }

    return items;
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
