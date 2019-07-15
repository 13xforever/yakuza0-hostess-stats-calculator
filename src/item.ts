export interface Stats
{
    SEXY: number;
    BEAUTY: number;
    CUTY: number;
    FUNNY: number;
}

export interface Item extends Stats
{
    KIND: string;
    NAME: string;
    BUY: number;
}

export interface Dictionary<TValue>
{
    [Key: string]: TValue;
}