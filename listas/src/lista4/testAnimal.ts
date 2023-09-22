import { Snake } from "./Snake"
import { Horse } from "./Horse"
import { Animal } from "./Animal"

function exemploPolimorfismo( camaleon: Animal ){//substui o console.log abaixo:
    console.log(camaleon.move())
    console.log(camaleon.toString())
}

let objSnake = new Snake(`Cobrinha do Bem`, false)

let objHorse = new Horse(`Cavalo matador`, true)

exemploPolimorfismo(objSnake)
exemploPolimorfismo(objHorse)

// console.log(objSnake.toString())
// console.log(objSnake.move())

// console.log(objHorse.toString())
// console.log(objHorse.move())