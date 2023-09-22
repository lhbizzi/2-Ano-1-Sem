export class Veículo{
    protected name: string
    constructor(name: string){
        this.name = name
    }
    //fazer os setters e getters 
    toString(): string{
        return `{Name ${this.name}}`
    }
    walk(): string{
        return `move with ...`
    }
}