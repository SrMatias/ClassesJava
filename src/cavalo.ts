import { Animal } from "./animal";
export class Cavalo implements Animal{
    nome: String
    idade: number
   constructor(

    nome:String,
    idade: number
   ){

    this.nome = nome
    this.idade = idade

   }

    emitirSom(): void {
        console.log("Emite o som :relinchando");
    }
    locomocao(): void {
        console.log("Condição: correndo");
    }

    exibir(){

        console.log(`O Cavalo se chama : ${this.nome}\n`+
                    `Sua idade é :${this.idade}\n`
                   )
    
                    
    }
}