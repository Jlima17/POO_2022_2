/* Crie uma função que recebe como parâmetro um número e retorna true se o número for
primo e false caso contrário.*/

function primo(n: number) : boolean{
    let cont: number = 0;

    for(let i = 2; i <= n ; i++){
        if( n % i == 0){
            cont++;
        }

        if(cont > 1){
            return false;
        }
    }

    return true
}

const primoN: boolean = primo(5);
console.log(primoN);