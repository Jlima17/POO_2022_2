const input = require('prompt-sync')()

function main(){
    const num1 = Number(input('Insira um número inteiro: '))
    const num2 = Number(input('Insira um segundo número inteiro: '))
    const num3 = Number(input('Insira um terceiro número inteiro: '))

 
    if(num1>=num2 && num1>=num3){
        maior=num1;
    }
    else if(num2>=num1 && num2>=num3){
        maior=num2;
    }
    else if(num3>=num2 && num3>=num1){
        maior=num3;
    }

    console.log(maior, 'é o maior número digitado')
}

main()