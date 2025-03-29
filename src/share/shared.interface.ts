export interface IUseCase<T> {
    execute(data: any): Promise<T>;
}


export interface IRepository<T>{
    save(data: T): Promise<void>;
    get(data: T): Promise<void>;
    delete(data: T): Promise<void>;
    update(data: T): Promise<void>;
}