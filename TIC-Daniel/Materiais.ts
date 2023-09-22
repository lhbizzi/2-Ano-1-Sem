import { Produto } from "./Produto";

export class Materias extends Produto{

        constructor(Nome_Produto: string, Cod_Produto: number, Data_Vencimento: Date, qtde: number){
            super(Nome_Produto,Cod_Produto, Data_Vencimento, qtde)
        } 
        toString(): String{
            return `(Nome: ${this.Nome_Produto}, Codigo: ${this.Cod_Produto}, ${this.Data_Vencimento}, Quantidade: ${this.qtde})`
        } 
        Aumenta_Quant(x:number ): void{
            this.qtde =+ x
        }
        Diminiu_Quant(x:number): void{
            this.qtde =- x
        }
}