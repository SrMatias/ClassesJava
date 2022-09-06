import { Animal } from "./animal";
export class Cachorro implements Animal{
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
        console.log("Emite o som :AuaAUauauau");
    }
    locomocao(): void {
        console.log(" Esta correndo");
    }

exibir(){

    console.log(`O cachorro se chama : ${this.nome}\n`+
                `Sua idade é :${this.idade}\n`
            
               )

                
}

    
}