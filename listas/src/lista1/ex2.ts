class Cliente{
    conta: number;
    agencia: number;
    name: string;
    saldo: number;
    //criar constructors 
    constructor (conta: number, agencia: number, name: string, saldo: number){
        this.conta = conta;
        this.agencia = agencia;
        this.name = name;
        this.saldo = saldo;
    }
    //criar os métodos
    deposito(qtde: number): void{
        this.saldo = this.saldo + qtde
    }
    saque(qtde: number): void{
        this.saldo = this.saldo - qtde
    }
    valorAtual(): string{
        return `O cliente ${this.name}, titular da conta número ${this.conta}, está atualmente com um saldo de R$${this.saldo}`
    }
}
//criar cliente 1
let cliente1 = new Cliente(12100, 1001, "Fulano", 1000000)
console.log(cliente1.valorAtual())
//realiza deposito 
cliente1.deposito(10)
console.log(cliente1.valorAtual())
//realiza saque
cliente1.saque(1000000)
console.log(cliente1.valorAtual())

console.log("\n")

//criar cliente 2
let cliente2 = new Cliente(23200, 2112, "Beltrano", 0)
console.log(cliente2.valorAtual())
//realiza deposito 
cliente2.deposito(10)
console.log(cliente2.valorAtual())
//realiza saque
cliente2.saque(20)
console.log(cliente2.valorAtual())