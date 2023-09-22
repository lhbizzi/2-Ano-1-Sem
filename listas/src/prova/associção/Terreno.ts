export class Terreno{
    private name: string;
    private id: number;

    constructor(name: string, id: number){
        this.name = name, this.id = id;
    }
    getName(): string{
        return this.name
    }
    getNro(): number{
        return this.id
    }
    toString(): string{
        return `{Name: ${this.name} CPF: ${this.id}}`
    }
}