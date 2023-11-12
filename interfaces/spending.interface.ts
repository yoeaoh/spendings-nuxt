import { ICategory } from './category.interface';

export interface ISpending {
    id: string;
    sum: number;
    date: string;
    category: ICategory;
    description: string;
}

export interface ISpendingDto {
    id: string;
    sum: number;
    date: string;
    categoryId: string;
    description: string;
}
