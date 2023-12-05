export interface ICategory {
    id: string;
    name: string;
    sum: number;
    subCategories: ISubCategory[];
}

export interface ISubCategory {
    id: string;
    categoryId: string;
    name: string;
    sum: number;
    count: number;
}
