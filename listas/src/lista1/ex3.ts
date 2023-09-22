class Product{
    id: number;
    description: string;
    qtde: number;
    price: number;

    //create the constructors
    constructor(id: number, description: string, qtde: number, price: number){
        this.id = id;
        this.description = description;
        this.qtde = qtde;
        this.price = price;
    }
    //create the methods
    buy(x: number):void{
        this.qtde += x
    } 
    sell(x: number): void{
        if(x <= this.qtde){
            this.qtde -= x
        }
        else{
            console.log("Enough Amount on the Stock")
        }
    }
    up(x: number): number{
        return this.price += x
    }
    down(x: number): number{
        return this.price -= x
    }
    show():string{
        return `The product ${this.description}, id ${this.id}, has a total of ${this.qtde} on stock. Has a price of $${this.price}.`
    }
}
//create the objects
let Objs1 = new Product(1,'ps5',5,100)
console.log(Objs1.show())
//buying to the stock
Objs1.buy(2)
console.log(Objs1.show())
//selling to clients
Objs1.sell(4)
console.log(Objs1.show())
//increasing the price
Objs1.up(50)
console.log(Objs1.show())
//lowering the price
Objs1.down(60)
console.log(Objs1.show())