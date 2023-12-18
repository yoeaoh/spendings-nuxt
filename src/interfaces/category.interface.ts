export interface ISubCategory {
    id: string;
    name: string;
    sum: number;
    categoryId: string;
    count: number;
}

export interface ICategory {
    id: string;
    name: string;
    sum: number;
    subCategories: ISubCategory[];
}

export type ICategoryColumns = Array<Partial<keyof ICategory>>;
