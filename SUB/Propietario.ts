import { Terreno } from "./Terreno";
import { Veiculos } from "./Veiculos";

export class Propietario{
    private name: string;
    private cpf: string;
    private Terrenos: Terreno[];
    private Veiculos: Veiculos[]

    constructor(name: string, cpf: string, Terrenos: Terreno){
        this.name = name, this.cpf = cpf, this.Terrenos = [], this.addTerreno(Terrenos)
    }
    addTerreno(Terrenos: Terreno): void{
        this.Terrenos.push(Terrenos)
    }
    getTerrenos(): Terreno[]{
        return this.Terrenos
    }
    getName(): string{
        return this.name
    }
    getCpf(){
        return this.cpf
    }
    toString(): string{
        return `{Name: ${this.name} CPF: ${this.cpf}}`
    }
}
