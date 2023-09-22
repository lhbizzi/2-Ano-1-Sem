// classe parte Product
class Products {
    private name: string
    private price: number
    constructor(name: string, price: number){
        this.name = name; this.price = price
    }
    // liçao de casa: fazer os métodos getters e setters
    getPrice(): number{
        return this.price
    }
    // método que converte objeto em string
    toString(): string {
        return `{ Name: ${this.name} Price: ${this.price} }`
    }
}
const obj1Product = new Products('Alexa', 400)
const obj2Product = new Products('Bola de basquete', 200)

// class Todo para a associação com Product
class CarItem {
    private product: Products // agregação
    private quantity: number
    constructor (product: Products, quantity: number){
        this.product = product; this.quantity = quantity
    }
    // liçao de casa: fazer os métodos getters e setters
    setProduct(product: Products){
        this.product = product
    }
    getProduct(): Products{
        return this.product
    }
    // método que calcula o valor total do item do carrinho
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    }
    // método que converte objeto em string
    toString(): string {
        return `Car Item: {Product: ${this.product.toString()} Quantity: ${this.quantity} Total Price: ${this.calculateTotalPrice()}}`
    }
}
const obj1CarItem = new CarItem(obj1Product, 2)
console.log(obj1CarItem.toString())
const obj2CarItem = new CarItem(obj2Product, 5)
console.log(obj2CarItem.toString())

class ShoppingCart {
    private id: number
    private carItens: CarItem[]
    constructor(id:number, carItens: CarItem){
        this.id = id; this.carItens = [carItens];
    }
    getCart(): CarItem[]{
        return this.carItens
    }
    addCartItem(CarItem: CarItem): void{
        this.carItens.push(CarItem)
    }
    toString(): string{
        return `Id: ${this.id} Itens do carrinho: ${this.carItens}`
    }
    calculateTotalShoppingCart(): number{
        let soma : number = 0
        this.carItens.forEach(CarItem => {
            soma = soma + CarItem.calculateTotalPrice()
        })
        return soma
    }
}