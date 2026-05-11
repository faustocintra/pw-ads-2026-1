//encontrando o menor e o maior numero em uma série
let minimo = Math.min(2, -5, 4 ,0, 11 ,-1)
let maximo = Math.max(2, -5, 4 ,0, 11 ,-1)
console.log('Valores mínimos e máximo determinados a partir de valores avulsos: ')
console.log({minimo, maximo})

console.log('-'.repeat(80))

//e se os números estivessem em um vetor?
const nums = [2, -5, 4 ,0, 11 ,-1]

minimo = Math.min(nums)
maximo = Math.max(nums)
console.log('Valores mínimos e máximo determinados a partir de um vetor: ')
console.log({minimo, maximo})       

console.log('-'.repeat(80))
/* a sintaxe de espanhamento (spreading), representada por ... antes do nome de uma variavel que contem um vetor ou um obnjeto, é capaz de
'desempacotar' um vetor ou objeto em uma série de valores avulsos */

minimo = Math.min(...nums)
maximo = Math.max(...nums)
console.log('Valores calculados após aplicação do espalhamento no vetor: ')
console.log({minimo, maximo})

/* outros usos para a sintaxe de espallhamento */
const carro1 = {
    modelo : 'Fiorino',
    marca :'Fiat',
    ano : '1984',
    cor : 'bege',
}

//'Copiando' carro 1 para carro 2
//const carro2 = carro1 essa nao funcionaaa

/*NÃO FUNCIONA COMO DEVERIA, POIS CARRO2 APONTA PARA O MESMO OBJETO QUE CARRO1, ENTÃO QUALQUER ALTERAÇÃO
 EM CARRO2 VAI ALTERAR CARRO1 TAMBÉM
 para criar uma cópia  real de um opbjeto 
e não uma nova referencia a ele), podemos usar a sintaxe de espalhamento. Ela "desmonta" o objeto original e em seguida, remonta, mas em uma nova posição de memoria. */
//mudando o valor das propriedades de carro2
const carro2 = {...carro1} //espalhando o objeto carro1 para criar um novo objeto carro2
carro2.modelo = 'Fusca',
carro2.marca = 'Volkswagen',
carro2.ano = '1980',
carro2.cor = 'azul'

console.log('-'.repeat(80))

//exebindo ambos os carros
console.log({carro1, carro2})


const frutas = ['maça', 'banana', 'laranja']
const verduras = ['alface', 'couve', 'espinafre']

const hortifruti = [...frutas, ...verduras] //espalhando os dois vetores para criar um novo vetor
console.log('-'.repeat (80))
console.log({hortifruti})

/* problema: declarar uma função capaz de receber um número arbitrario
de parâmetro */
// espalhamento começou recentemente
function soma(... nums){
    //nums é recebido dentro da função como um vetor
    let resultado = 0
    for(let n of nums) resultado += n
    return resultado    
}


console.log('-.repeat(80)')
console.log(`Soma de 4 números: ${soma(1,2,4,4)}`)
console.log(`Soma de 7 números: ${soma(11, 22, 33, 44, 55, 66, 77)}`)
