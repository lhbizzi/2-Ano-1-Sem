import { Veículo } from "./Veículo"
import { Aquatico } from "./aquatico"
import { Terrestre } from "./terrestre"


function teste( camaleon: Veículo ){//substui o console.log abaixo:
    console.log(camaleon.walk())
    console.log(camaleon.toString())
}

let objTerrestre = new Terrestre(`Camaro venenoso`, true)

let objAquatico = new Aquatico(`Lancha que estoura miolos`, true)

teste(objTerrestre)
teste(objAquatico)