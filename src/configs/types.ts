export type itemCarType = {
    title: string,
    id: string,
    year: string;
    class: string;
    model: string;
    make: string;
    image: string;
    fuel_type: string;
    transmission: string;
    max_comb_mpg: string;
}

export type reducerDataType = {
    maxPage: number;
    list: itemCarType[];
    listModels: string[];
}