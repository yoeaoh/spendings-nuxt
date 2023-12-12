export const FilterVariants = {
    ADD_DATE_ASC: { key: "ADD_DATE_ASC", name: "Дата добавления ⇡" },
    ADD_DATE_DESC: { key: "ADD_DATE_DESC", name: "Дата добавления ⇣" },
    ASC_SUM: { key: "ASC_SUM", name: "Сумма ⇡" },
    DESC_SUM: { key: "DESC_SUM", name: "Сумма ⇣" },
    ASC_DATE: { key: "ASC_DATE", name: "Дата ⇡" },
    DESC_DATE: { key: "DESC_DATE", name: "Дата ⇣" },
} as const;

export type IFilterVariants = keyof typeof FilterVariants;
