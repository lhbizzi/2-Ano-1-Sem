import { Limpeza } from "./Limpeza";
import { Materias } from "./Materiais";
import { Alimentos } from "./Alimento";
import { Produto } from "./Produto";

function estoPoli( estoque: Produto){
            console.log(estoque.toString())
            console.log(estoque.Aumenta_Quant)
            console.log(estoque.Diminiu_Quant)
}

let obejAlimento = new Alimentos("Cenoura", 2000, new Date(2023, 4, 13), 10, "Vegetal")
let objLimpeza = new Limpeza("Amaciante",1655, new Date(2023, 8, 25),5,"Lavanderia")
let objMaterial = new Materias("Cartolina",1665, new Date(2023,12,18),2)

estoPoli(obejAlimento)
estoPoli(objLimpeza)
estoPoli(objMaterial)