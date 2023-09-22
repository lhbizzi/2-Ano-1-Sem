import { CellPhone } from "./CellPhone";
import { Client } from "./Client";
import { Employee } from "./Employee";
import { Service } from "./Service";

class Attendance{
    private id: number;
    private date: Date;
    private client: Client; //agregação
    private employee: Employee; //agregação
    private service: Service; //agregação


    constructor(id: number, date: Date, client: Client, employee: Employee, service: Service){
        this.id = id, this.date = date, this.client = client
    }
    getClient(): Client{
        return this.client
    }
    getEmployee(): Employee{
        return this.employee
    }
    getService(): Service{
        return this.service
    }
    toString(): string{
        return `{Id: ${this.id} Date: ${this.date} Client ${this.client} Employee: ${this.employee} Service: ${this.service}}`
    }
}
let objCellPhone = new CellPhone(1, 16999990000, "TIM")
//cria um cliente com 1 celular
let objClient = new Client(1, "Leandro", "1234", objCellPhone)
let obj2CellPhone = new CellPhone(2, 16999990001, "Claro")
objClient.addCellPhone(obj2CellPhone)//add um novo celular
let objEmployee = new Employee(1, 100, "Vinícius")
let objService = new Service(1, "Escova", 80)

let objAttendance = new Attendance(1, new Date(), objClient, objEmployee, objService)
console.log(objAttendance.toString())

 
// lição de casa
// 1. Mostrar apenas o preço do serviço prestado no atendimento
console.log(objAttendance.getService().getPrice())
// 2. Mostrar apenas o nome do cliente atendido
console.log(objAttendance.getClient().getName())
// 3. Mostrar apenas o nome do empregado que atendeu
console.log(objAttendance.getEmployee().getName())

//mostra o primeiro número do celular do cliente atendido
