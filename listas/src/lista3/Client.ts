import { CellPhone } from "./CellPhone";

export class Client{
    private id: number;
    private name: string;
    private cpf: string;
    private cellPhones: CellPhone[];//composição - vários celulares

    constructor(id: number, name: string, cpf: string, cellPhone: CellPhone){
        this.id = id, this.name = name, this.cpf = cpf, this.cellPhones = [], this.addCellPhone(cellPhone)
    }
    addCellPhone(cellPhone: CellPhone): void{
        this.cellPhones.push(cellPhone)
    }
    getCellPhone(): CellPhone[]{
        return this.cellPhones
    }
    getId(): number{
        return this.id
    }
    getName(): string{
        return this.name
    }
    getCpf(){
        return this.cpf
    }
    toString(): string{
        return `{Id: ${this.id} Name: ${this.name} CPF: ${this.cpf}}`
    }
}