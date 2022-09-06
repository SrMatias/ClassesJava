import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import{Preguica} from"./src/preguica";

let cachorro1 = new Cachorro("Rex",8)
let cavalo1 = new Cavalo("Epona",7)
let preguica1 = new Preguica("Van Deley",2,"Subir em arvores")
console.log("*********")
cachorro1.exibir(),cachorro1.emitirSom()
cachorro1.locomocao()
console.log("*********")
cavalo1.exibir()
cavalo1.emitirSom()
cavalo1.locomocao()
console.log("*********")
preguica1.exibir()
preguica1.locomocao()
preguica1.emitirSom()
 