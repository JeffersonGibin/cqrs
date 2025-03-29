export interface IHandler<T> {
    handle(event: T): Promise<void>;
}

export interface ICommand<T> {
    execute(data: T): Promise<void>;
}

export interface IQuery<T> {
    execute(data: T): Promise<void>;
}

export interface IUseCase<T> {
    execute(data: T): Promise<void>;
}


export interface IRepository<T>{
    save(data: T): Promise<void>;
    get(data: T): Promise<void>;
    delete(data: T): Promise<void>;
    update(data: T): Promise<void>;
}