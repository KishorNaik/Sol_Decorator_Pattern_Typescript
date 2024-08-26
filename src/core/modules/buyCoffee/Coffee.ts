export interface ICoffee {
    cost(): number;
    description(): string;
}

export class Coffee implements ICoffee {
    public cost(): number {
        return 2.5;
    }
    public description(): string {
        return "Coffee";
    }
}