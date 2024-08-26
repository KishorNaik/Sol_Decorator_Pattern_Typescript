import { ICoffee } from "../Coffee";

export class ExtraCream implements ICoffee {

    private readonly _coffee: ICoffee;

    public constructor(coffee: ICoffee) {
        this._coffee = coffee;
    }

    public cost(): number {
        const getFreshCoffeeCost = this._coffee.cost();
        return getFreshCoffeeCost + 1.5;
    }
    public description(): string {
        const getFreshCoffeeDescription = this._coffee.description();
        return getFreshCoffeeDescription + " with extra cream";
    }

}