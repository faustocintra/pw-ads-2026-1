/*
  O método de vetores filter() cria um NOVO VETOR contendo
  apenas os elementos que atendam ao critério representado
  pela função passada como parâmetro.
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Cria um novo vetor apenas com os números negativos
console.log('Apenas números negativos:',
  numeros.filter(n => n < 0)
)

// Um novo vetor apenas com os múltiplos de 5
console.log('Múltiplos de 5:',
  numeros.filter(x => x % 5 === 0)
)

// Novo vetor apenas com números maiores que 20
console.log('Números maiores que 20:',
  numeros.filter(x => x > 20)
)

// Novo vetor apenas com frutas iniciadas pela letra "m"
console.log('Apenas frutas iniciadas com a letra "m":',
  frutas.filter(el => el.charAt(0) === 'm')
)

// Novo vetor apenas com frutas que terminam em "r"
console.log('Apenas frutas terminando com "r":',
  frutas.filter(fru => fru.slice(-1) === 'r')
)