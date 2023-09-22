class ClientEncap{
    private account: string;
    private agency: string;
    private name: string;
    private balance: number;
    constructor(account: string, agency: string, name: string, balance: number){
        this.setAccount(account); this.setAgency(agency); 
        this.setName(name); this.setBalance(balance); 
    }
    //creat set's
    setAccount(account: string): void{
        if(account.length == 8){
            if(account.charAt(6) == `-`){
                this.account = account
            }
            else{
                console.log(`O número da conta deve haver hífen para identificar o dígito`)
            }
        }
        else{
            console.log(`Números insuficientes`)
        }
    }
    setAgency(agency: string): void{
        if(agency.length == 6){
            if(agency.charAt(4) == `-`){
                this.agency = agency
            }
            else{
                console.log(`O número da agência deve haver hífen para identificar o dígito`)
            }
        }
        else{
            console.log(`Números insuficientes`)
        }
    }
    setName(name: string): void{
        if(name.length <= 30){
            this.name = name
        }
        else{
            console.log(`Nome não pode passar de 30 caracteres`)
        }
    }
    setBalance(balance: number): void{
        balance >= 0 ? this.balance : console.log(`O Saldo não pode ser negativo`)
    }
    //create Get's
    getAccount(): string{
        return this.account
    }
    getAgency(): string{
        return this.agency
    }
    getName(): string{
        return this.name
    }
    getBalance(): number{
        return this.balance
    }
    //create methods
    withdrawal(x: number){
        this.setBalance(this.balance - x)
    }
    deposit(x: number){
        this.setBalance(this.balance + x)
    }
    show(): string{
        return `O cliente ${this.getName()}, titular da conta ${this.getAccount()}, agência ${this.getAgency()}, possui $${this.getBalance()} de saldoem sua conta`
    }
}

let fulano = new ClientEncap(`12345-6`, `1234-5`, `Fulano`, 200)
fulano.deposit(300)
fulano.withdrawal(500)
console.log(fulano.show())