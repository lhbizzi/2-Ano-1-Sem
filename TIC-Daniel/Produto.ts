export class Produto{
    protected Nome_Produto: string;
    protected Cod_Produto: number;
    protected Data_Vencimento: Date;
    protected qtde: number;
    
    constructor(Nome_Produto: string, Cod_Produto: number, Data_Vencimento: Date, qtde: number){
        this.Nome_Produto= Nome_Produto;
        this.Cod_Produto= Cod_Produto;
        this.Data_Vencimento= Data_Vencimento;
        this.qtde= qtde
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
