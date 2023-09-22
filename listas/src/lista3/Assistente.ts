import { Funcionario } from "./Funcionario";

export class Assistente extends Funcionario{
    private horaExtra: number;
    
    constructor(name: string, adress: string, cpf: string, salario: number, horaExtra: number){
        super(name, adress, cpf, salario)
        this.horaExtra = horaExtra
    }
    calculaSalario(): number{
        return this.salario + this.horaExtra
    }
}