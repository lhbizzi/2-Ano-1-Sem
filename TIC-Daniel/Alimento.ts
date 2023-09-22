import { Produto } from "./Produto";

export class Alimentos extends Produto{
    private Grup_Alimentar: string

    constructor(Nome_Produto: string, Cod_Produto: number, Data_Vencimento: Date, qtde: number, Grup_Alimentar: string){
        super(Nome_Produto,Cod_Produto, Data_Vencimento, qtde);
        this.Grup_Alimentar= Grup_Alimentar
    } 
    toString(): String{
        return `(Nome: ${this.Nome_Produto}, Codigo: ${this.Cod_Produto}, ${this.Data_Vencimento}, Quantidade: ${this.qtde}, Grupo Alimentar ${this.Grup_Alimentar})`
    } 
    Aumenta_Quant(x:number ): void{
        this.qtde =+ x
    }
    Diminiu_Quant(x:number): void{
        this.qtde =- x
    }
}