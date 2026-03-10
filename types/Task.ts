
export interface TaskInterface{
    title: string,
    description?: string,
    status?: 'active'|'complete',
}

export interface TaskInterfaceProps extends TaskInterface{
    index: number,
    page?: number
}