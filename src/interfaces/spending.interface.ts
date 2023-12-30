import { type ICategory } from "./category.interface";

export interface ISubSpending {
    id: string;
    sum: number;
    name: string;
    category: ICategory;
    date: string;
}

export interface ISpending {
    id: string;
    sum: number;
    name: string;
    category: ICategory;
    date: string;
    subSpendings?: ISubSpending[];
}
