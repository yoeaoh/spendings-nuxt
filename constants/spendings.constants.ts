export const FilterVariants = {
    ASC_SUM: { key: 'ASC_SUM', name: 'Сумма вверх' },
    DESC_SUM: { key: 'DESC_SUM', name: 'Сумма вниз' },
    ASC_DATE: { key: 'ASC_DATE', name: 'Дата вверх' },
    DESC_DATE: { key: 'DESC_DATE', name: 'Дата вниз' },
} as const;

export type IFilterVariants = keyof typeof FilterVariants;
