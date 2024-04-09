export declare class Holding {
    symbol: string;
    shares: number;
    value: number;
    costBasis: number;
    dayChange: number;
    yesterdayValue: number | null;
    constructor(symbol: string, shares: number, value: number, costBasis: number, dayChange: number, yesterdayValue: number | null);
    static fromJson(json: string): Holding;
}
