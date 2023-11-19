import { ICategory } from './category.interface';

export interface ISpending {
    id: string;
    category: ICategory;
    sum: number;
    date: string;
    description: string;
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
    spending: ISpending;
    sum: number;
    name: string;
}

export interface ISubSpendingDto {
    id: string;
    spendingId: string;
    sum: number;
    name: string;
}
