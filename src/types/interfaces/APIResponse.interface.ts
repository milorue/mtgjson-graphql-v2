export interface APIResponse{
    data: any[] | any,
    meta: {
        date: string,
        version: string
    }
}