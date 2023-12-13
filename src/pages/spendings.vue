<script lang="ts" setup>
import type { ISpending, ISubSpending } from "~/interfaces/spending.interface";
import { useSpendingsStore } from "~/store/spendings.store";

const spendings = useSpendingsStore();
const { items } = spendings;

const isFlattenToggle: Ref<Boolean> = ref(false);

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
        <div class="spendings-page__title">Расходы</div>

        <label for="is-flatten-toggle">
            Развернуть
            <input
                v-model="isFlattenToggle"
                name="is-flatten-toggle"
                type="checkbox"
            />
        </label>

        <div class="spendings-page__content">
            <table>
                <thead>
                    <th>Название</th>
                    <th>Сумма</th>
                    <th>Категория</th>
                </thead>

                <tbody>
                    <tr
                        v-for="spending in computedSpendings"
                        :key="spending.id"
                    >
                        <td>{{ spending.name }}</td>
                        <td>{{ spending.sum }}</td>
                        <td>{{ spending.category.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
