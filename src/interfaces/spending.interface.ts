import { type ICategory } from './category.interface';

export interface ISpending {
    id: string;
    category: ICategory;
    sum: number;
    date: number;
    description: string;
    subSpendings: ISubSpending[];
}

export interface ISpendingDto {
    id: string;
    categoryId: string;
    sum: number;
    date: string;
    description: string;
}

export interface ISubSpending {
    id: string;
    sum: number;
    name: string;
}
