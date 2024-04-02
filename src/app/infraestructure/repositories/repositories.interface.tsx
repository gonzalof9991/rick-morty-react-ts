export type RepositoriesInterface<T> = {
    getAll: () => Promise<T>;
    getPage: (url: string) => Promise<T>;
    getParams: (params: string) => Promise<T>;
};