// npm init -y // cria o projeto Node
// npm install typescript // instala a dependência do typescript no projeto
// npx tsc --init // cria o arquivo de configuração tsconfig.json
// npm i tsx // instala a dependência tsx, que transforma o arquivo TS em JS (já que Node não reconhece TypeScript 
// npx tsx src/Carro.ts // executa a Classe

//criando um tipo de dadps
class Carro {
    // declarar variáveis
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    motor: boolean; // true é motor ligado, false desligado

    //método construtor - inicializa as variáveis da classe
    constructor (ano: number, cor: string, marca: string, modelo: string, motor: boolean){
        this.ano = ano;
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }

    // declarar métodos
    ligar(): void {
        this.motor = true;
    }
    desligar(): void {
        this.motor = false;
    }
    deixarCarroMaisNovo(qtde: number): void{ // qtde é variável local
        this.ano = this.ano + qtde
    }
    deixarCarroMaisVelho(qtde: number): void{
        this.ano = this.ano - qtde
    }
}

// criando obj1 - instanciando
let obj1 = new Carro(2019, "branco", "GM", "Onix", true);
console.log(obj1);
// desligar o obj1
obj1.desligar()
obj1.deixarCarroMaisNovo(2)
console.log(obj1);

//criando obj2
let obj2 = new Carro(2016, "azul", "fiat", "palio", false);
//desligar o obj2
obj2.ligar()
obj2.deixarCarroMaisNovo(4)
console.log(obj2);