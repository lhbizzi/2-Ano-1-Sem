export class Funcionario{
    protected name: string;
    protected adress: string;
    protected cpf: string;
    protected salario: number;

    constructor(name: string, adress: string, cpf: string, salario: number){
        this.name = name, this.adress = adress, this.cpf = cpf, this.salario = salario;
    }
    toString(): string{
        return `{Name: ${this.name} Adress: ${this.adress} CPF: ${this.cpf} Salário: ${this.salario}}`
    }
    calculaSalario(): number{
        return this.salario
    }
}