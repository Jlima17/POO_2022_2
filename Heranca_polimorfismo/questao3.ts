import Calculator from "./questao2";

class ScientificCalculator extends Calculator{
    constructor(operating1: number, operating2: number){
        super(operating1, operating2);
    }

    exponentiate(){
        return this.operating1 ** this.operating2;
    }

}

let sc1: ScientificCalculator = new ScientificCalculator(17, 10);

console.log(sc1.exponentiate());
console.log(sc1.sum());

/* Letra C: para que a exponenciação fosse possível, fez-se necessário a criação dos métodos 
que possibilitam a leitura utilizando a super classe. */

