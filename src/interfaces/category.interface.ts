export interface ICategory {
    id: string;
    name: string;
    sum: number;
    subCategories: ISubCategory[];
}

export interface ISubCategory {
    id: string;
    name: string;
    sum: number;
    categoryId: string;
    count: number;
}
