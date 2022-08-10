const input = require('prompt-sync')();

const num_decimal = Number(input('Digite um número decimal qualquer: '))

const ant = num_decimal - ((num_decimal%10)/10)
const suc = num_decimal + ((num_decimal%10)/10)


console.log('O antecessor de', ant.toFixed(0), 'é: ')
console.log('O sucessor de', suc.toFixed(0), 'é: ')