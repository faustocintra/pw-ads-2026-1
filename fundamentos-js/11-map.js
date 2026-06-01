/*
  O método de vetores map() cria um novo vetor no qual cada
  elemento é o resultado de um processamento do elemento
  correspondente do vetor original. A transformação é
  processada pela função passada como parâmetro. O novo vetor
  gerado por map() terá sempre o mesmo número de elementos do
  vetor original.
*/

const numeros = [13, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Gerando um novo vetor em que cada elemento corresponde ao valor
// do elemento original elevado ao quadrado
const quadrados = numeros.map(n => n ** 2)

console.log('ORIGINAL: ', numeros)
console.log('QUADRADOS:', quadrados)

// map() que transforma os elementos do vetor original em itens
// da lista para uso em uma página HTML (uso frequente em React)
const itensLista = frutas.map(f => `<li>${f}</li>`)

console.log('-'.repeat(80))

console.log('<h1>FRUTAS ENCONTRADAS NO BRASIL</h1>')
console.log('<ul>')
for(const item of itensLista) console.log(item)
console.log('</ul>')

