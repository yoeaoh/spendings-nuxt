import { type ICategory } from "./category.interface";

export interface ISubSpending {
    id: string;
    sum: number;
    name: string;
    category: ICategory;
    date: number;
}

export interface ISpending {
    id: string;
    sum: number;
    name: string;
    category: ICategory;
    date: number;
    subSpendings: ISubSpending[];
}

export interface ISpendingDto {
    id: string;
    categoryId: string;
    sum: number;
    date: string;
    name: string;
}
