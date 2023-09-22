import { Produto } from "./Produto";

export class Limpeza extends Produto{
     private Categoria_Prod: string

     constructor(Nome_Produto: string, Cod_Produto: number, Data_Vencimento: Date, qtde: number, Categoria_Prod:  string){
            super(Nome_Produto,Cod_Produto, Data_Vencimento, qtde)
            this.Categoria_Prod= Categoria_Prod
        }
        toString(): String{
            return `(Nome: ${this.Nome_Produto}, Codigo: ${this.Cod_Produto}, ${this.Data_Vencimento}, Quantidade: ${this.qtde}, Categoria ${this.Categoria_Prod})`
        }
        Aumenta_Quant(x:number ): void{
            this.qtde =+ x
        }
        Diminiu_Quant(x:number): void{
            this.qtde =- x
        }
    }