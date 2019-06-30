export interface Seeders<T> {
    run (): Promise< { data: T[] , type: string } > ;
}
