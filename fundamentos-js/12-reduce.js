/*
  reduce() é um método de vetores que REDUZ o vetor a um ÚNICO VALOR.
  Para isso, aplica uma função a cada elemento do vetor, a qual
  efetua uma operação sobre o elemento da vez e acumula o valor em
  um parâmetro a cada passada. O resultado é o valor final do acumulador.
*/

const numeros = [1, 2, 3, 4, 5, 6]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

/*
  Usando reduce() para somar todos os elementos do vetor numeros
  A função de callback do reduce(), em sua forma mais simples, leva dois
  parâmetros:
  1º ~> é o acumulador (normalmente nomeado como "acum" ou "acc"), que
        armazena o resultado acumulado das operações efetuadas sobre os
        elementos anteriores
  2º ~> corresponde ao elemento ("el" ou "e") que está sendo processado
        no momento
*/
const soma = numeros.reduce((acum, el) => acum + el)
console.log('Soma dos números:', soma)

// De forma semelhante, a multiplicação dos números do vetor
const produto = numeros.reduce((acc, e) => acc * e)
console.log('Produto dos números:', produto)

console.log('-'.repeat(80))

// Usando reduce() para fazer a concatenação das frutas, mostrando os
// valores do acumulador e do elemento da vez a cada passo
const resultado = frutas.reduce((acc, el) => {
  console.log(`Acumulador: ${acc}; elemento atual: ${el}`)
  return acc.toUpperCase() + '; ' + el.toUpperCase()
})
console.log('\n\n', resultado)