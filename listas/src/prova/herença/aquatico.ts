import { Veículo } from "./Veículo";

export class Aquatico extends Veículo{
    private lux: boolean;

    constructor(name: string, lux: boolean){
        super(name);
        this.lux = lux
    }
    //getters e setters 

    //anulação de método - eu não te quero mas não te largo
    toString(): string{
        return `${super.toString()} Lux: ${this.lux ? `Yes` : `No`}`
    }
    
    //anulação de método
    Walk(): string {
        return `move with propellers for water...`
    }
}