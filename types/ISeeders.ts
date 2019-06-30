export interface ISeeders<T> {
    run (): Promise< T[] > ;
}
