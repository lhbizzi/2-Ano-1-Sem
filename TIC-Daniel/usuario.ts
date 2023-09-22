import { Dispositivo } from "./Dispositivo";
export class Usuario{
    public cod_Usuario: number;
    private nome_Usuario: string;
    private cod_Dispositivo: Dispositivo;

    constructor(cod_Usuario: number, nome_Usuario: string, cod_Dispositivo: Dispositivo){
        this.cod_Usuario = cod_Usuario; this.nome_Usuario = nome_Usuario, this.cod_Dispositivo = cod_Dispositivo;
    }
    getcod_Usario(): number{
        return this.cod_Usuario
    }
    toString(): string{
        return `Codigo do Usuario: ${this.cod_Usuario}, Nome do Usuario: ${this.nome_Usuario}, Código do dispositivo: ${this.cod_Dispositivo}`
    }
}