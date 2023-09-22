class Aluno{
    nmrAlun: number;
    name: string;
    age: number;
    p1: number;
    p2: number;

    //criar construtores    
    constructor (nmrAlun: number, name: string, age: number, p1: number, p2: number){
        this.nmrAlun = nmrAlun;
        this.name = name;
        this.age = age;
        this.p1 = p1;
        this.p2 = p2;
    }
    //criar métodos
    notaFinal(): number{
        return (this.p1 + this.p2)/2
    }
    dadosAlun(): string{
        return `Nome do Aluno: ${this.name}\nIdade do Aluno: ${this.age}\nNúmero do Aluno: ${this.nmrAlun}\nMédia: ${this.notaFinal()}`
    }
    passou(): void{
        if(this.notaFinal() >= 6){
            console.log("Status: Aprovado!")
        }
        else{
            console.log("Status: Reprovado!")
        }
    }
} 
//criar obj1 - Instanciando
let Obj1 = new Aluno(1, `Lucas`, 19, 9, 10)
//utilizando os métodos
console.log(Obj1.dadosAlun())
Obj1.passou()