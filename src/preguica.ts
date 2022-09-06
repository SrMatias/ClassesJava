import { Animal } from "./animal";
export class Preguica implements Animal{
    nome: String
    idade: number
    atividade: String
   constructor(

    nome:String,
    idade: number,
    atividade :String
   ){

    this.nome = nome
    this.idade = idade
    this.atividade = atividade
   }

    emitirSom(): void {
        console.log("Som emitido: ZZZZzzzzzz");
    }
    locomocao(): void {
        console.log("Locomoção: lenta");
    }

    exibir(){

        console.log(`A Preguiça se chama : ${this.nome}\n`+
                    `Sua idade é :${this.idade}\n`
                   )
    
                    
    }

    
}