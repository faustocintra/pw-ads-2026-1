/* desestruturação de objetos (object destructuring) é a operação que torna possíovel extrair
valores individuais a partir de vetores e objetos, atribuindo-os a variaveis avulsas*/

//1. desestruturação de vetor
const carros = ['Fusca', 'Chevette', 'Opala']
//desestruração
const [c1,c2,c3] = carros

/* sem a desestruturação, seria necessário fazer:
const c1 = carros[0]
const c2 = carros[1]
const c3 = carros[2]
*/
console.log({c1, c2, c3})

// desestruturação parcial: 1º e  3º elementos:
const [carro1, ,carro3] = carros //reparar que o segundo elemento do vetor é ignorado, por isso a vírgula sem nada entre elas
console.log({carro1, carro3})

//2. desestruturação de parcial: 1º e 2º elementos:
const [k1, k2] = carros
console.log({k1, k2})

//desestruturação parcial: 2º e 3º elementos:
const [, v2, v3] = carros
console.log({v2, v3})

//problema: troco de valores de variaveis entre si (swap)
let var1 = 10, var2 = 20
let var1 = 10, var2 = 20
console.log('ANTES:', {var1, var2})

//modo clássico de fazer swap (usando uma variavel temporaria/auxiliar)
/* letaux = var1
var1 = var2
var2 = aux */



//swat usando desestruturação 
{ [var1, var2] = [var2, var1]}
console.log('DEPOIS:', {var1, var2})

console.log('-'.repeat(80))

//2. desestruturação de objetos

const pessoa = {
    nome: 'Orkuultison Osório Oliveira',
    sexo: 'M',
    dataNasci: '2010-04-29',
    email: 'orkut@gmail.com'
} 

/* Na desestruturação de objetos as variaveis avulsas
devem ter o mesmo nome das propriedas do objeto que extraem
podem ter especificados em qualquer ordem
pode ser feita a desestruturação parcial
*/
const {sexo, nome, email} = pessoa

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)
//vetor sempre tem ordem!!!
//em orientação a objetos tem nome!!


