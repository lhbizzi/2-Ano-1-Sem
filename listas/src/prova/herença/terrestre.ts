import { Veículo } from "./Veículo";

export class Terrestre extends Veículo{
    private sporty: boolean;

    constructor(name: string, sporty: boolean){
        super(name);
        this.sporty = sporty
    }
    //getters e setters 

    //anulação de método - eu não te quero mas não te largo
    toString(): string{
        return `${super.toString()} Sporty: ${this.sporty ? `Yes` : `No`}`
    }
    
    //anulação de método
    Walk(): string {
        return `move with wheels...`
    }
}