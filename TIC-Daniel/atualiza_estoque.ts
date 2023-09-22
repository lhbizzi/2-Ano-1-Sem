import { Usuario } from "./usuario";
import { Produto } from "./Produto"

class AtualizaEstoque{
    private cod_Usuario: number;
    private data_Atualiza: Date;
    public qtde: number;
    private usuario: Usuario;
    private Produto: Produto;

    constructor(cod_Usuario: number, cod_Prod: number, data_Atualiza: Date, qtde: number, usuario: Usuario, Produto: Produto){
        this.cod_Usuario = cod_Usuario;
        this.data_Atualiza = data_Atualiza; this.qtde = qtde;
        this.usuario
    }
    getUsuario(): Usuario{
        return this.usuario
    }
    getProduto(): Produto{
        return this.Produto
    }

}

let usuario1 = new Usuario (24053, "Pedro")
console.log(usuario1)