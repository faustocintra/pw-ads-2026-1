/*
o método de vetores find() encontro o PRIMEIRO ELEMENTO
que corresponda ao retorno de uma função passada como parametro */

const numeros = [12, 19,3, -4, 13, -11, 15, -1,0]
const frutas = ['laranja','abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

    //encontrando o primeiro número negativo no vetor de números
    console.log('Primeiro número negativo: ')
    numeros.find(n => n <0)


    //encontrando o primeiro numero multiplos de 5
    console.log('Primeiro multiplo de 5: ')
    numeros.find(n => n % 5 === 0)

    //encontrando o primeiro número maior que 20
    console.log('Primeiro número maior que 20: ')
    console.log(i => i > 20)

    //ENCONTRNADO A PRIMEIRA FRUTA QUE COMEÇA COM A LETR
    console.log('Primeira fruta que começa com a letra "m": ')
    frutas.find(f => f.startsWith('m'))
/* O PROFESSOR ESCREVEU COMO F => F.CHART(0) === 'm' MAS EU ACHEI MELHOR USAR O STARTSWITH()
 QUE É MAIS CLARO E FÁCIL DE ENTENDER, O RESULTADO É O MESMO */

 //ENCONTRANDO A PRIMEIRA FRUTA QUE TERMINA COM "R"
 console.log('A primeira fruta com a letra "r" no final: ')
    frutas.find(f => f.endsWith('r'))
    /* o professor usou f.slice(-1) === 'r' para encontrar a letra no final, mas achei melhor usar o endsWith() 
    que é mais claro e fácil de entender, o resultado é o mesmo */

