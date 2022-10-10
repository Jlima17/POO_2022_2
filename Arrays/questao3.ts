/*Crie uma função que receba como parâmetros um nome e um pronome de tratamento
opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
imprima uma saudação semelhante a “Sra. Sávia”.*/

function greeting(personName: string, pronoun: string = 'Sra.'): string{
    let greeting: string = pronoun + personName;

    return greeting;
}
let personName: string = "Juliana";
let pronoun: string = "Sra.";

let greeting1: string = greeting(personName, pronoun);
console.log(greeting1);