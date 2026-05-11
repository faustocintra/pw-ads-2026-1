/* o método de vetores filter cria um novo vetor contendo apenas os elementos que atendam
ao criterio representado pela função passada como parametro */

const numeros = [12, 19,3, -4, 13, -11, 15, -1,0]
const frutas = ['laranja','abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

//cria um novo vetor apenas com números negativos
console.log('Apenas números negativos:'   
numeros.filter(n => n < 0)
)
//um novo vetor apenas com os multimos de 5
console.log('Multiplos de 5:  '
numeros.filter(n => n % 5 === 0)
)


//novo vetor apenas com números maiores que 20
console.log('Numeros maiores que 20: ',
    numeros.filter(x => x > 0)


    //novo vetor apenas com frutas iniciadas pela letra "m"
    console.log('Apenas frutas que começam com a letra "m": ',
    frutas.filter(f => f.startsWith('m'))
    /* o professor usou el => el.charAt(0) === 'm' para encontrar a letra no início, mas achei melhor usar o startsWith()
que é mais claro e fácil de entender, o resultado é o mesmo */


//novo vetor apenas com frutas que terminam com "r"
console.log('Apenas frutas que terminam com a letra "r": ',
    frutas.filter(f => f.endsWith('r'))
    /* o professor usou fru => fru.slice 'r' para encontrar a letra no final, mas achei melhor usar o endsWith() 
    que é mais claro e fácil de entender, o resultado é o mesmo */


