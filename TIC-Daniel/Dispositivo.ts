
export class Dispositivo{
    private cod_Disp: number;

    constructor(cod_Disp: number){
        this.cod_Disp = cod_Disp
    }
    toString(): string{
        return `cod_Disp: ${this.cod_Disp}`
    }
}