export class CellPhone{
    private id: number;
    private nro: number;
    private operadora: string;

    constructor(id: number, nro: number, operadora: string){
        this.id = id, this.nro = nro, this.operadora = operadora;
    }
    getId(): number{
        return this.id
    }
    getNro(): number{
        return this.nro
    }
    getOperadora(): string{
        return this.operadora
    }
    toString(): string{
        return `{Id ${this.id} Nro: ${this.nro} Operadora: ${this.operadora}}`
    }
}