class River{
    name: string;
    level: number;
    pollution: boolean;

    //criar construtores
    constructor(name: string, level: number, pollution: boolean){
        this.name = name;
        this.level = level;
        this.pollution = pollution;
    }

    //criar métodos
    rain(x: number): void{
        this.level += x
    }
    sunny(x: number): void{
        this.level -= x
    }
    clear(): void{
        this.pollution = false
    }
    dirty(): void{
        this.pollution = true
    }
    show(): string{
        if(this.pollution == false){
            return `O Rio ${this.name}, está com nível atual de ${this.level}, e se encontra limpo`
        }
        else{
            return `O Rio ${this.name}, está com nível atual de ${this.level}, e se encontra poluído`
        }
    }
}
let ObjRiver = new River(`Tietê`, 40, true)
console.log(ObjRiver.show())
ObjRiver.rain(10)
console.log(ObjRiver.show())
ObjRiver.sunny(20)
console.log(ObjRiver.show())
ObjRiver.clear()
console.log(ObjRiver.show())
ObjRiver.dirty()
console.log(ObjRiver.show())

console.log(`\n`)

let ObjRiver2 = new River(`Canoas`, 20, true)
console.log(ObjRiver2.show())
ObjRiver2.rain(10)
console.log(ObjRiver2.show())
ObjRiver2.sunny(20)
console.log(ObjRiver2.show())
ObjRiver2.clear()
console.log(ObjRiver2.show())
ObjRiver2.dirty()
console.log(ObjRiver2.show())