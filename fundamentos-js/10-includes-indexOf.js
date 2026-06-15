const carros = ['Chevette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
  O método includes() testa se um determinado elemento existe
  no vetor. Retorna true se existir, ou false, caso contrário.
*/
console.log('Tem Fusca?', carros.includes('Fusca'))
console.log('Tem Corcel?', carros.includes('Corcel'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
  O método indexOf() retorna o índice (posição) de um elemento
  no vetor. Caso o elemento não exista, retorna -1.
*/
console.log('Posição de Maverick:', carros.indexOf('Maverick'))
console.log('Posição de Chevette:', carros.indexOf('Chevette'))
console.log('Posição de Kombi:', carros.indexOf('Kombi'))

/*
  O método includes() só passou a ser parte da linguagem JavaScript
  em 2015. Anteriormente, para testar se um elemento existia no
  vetor, era necessário testar se o resultado de indexOf() era
  maior ou igual a zero
*/
console.log('Tem Fusca?', carros.indexOf('Fusca') >= 0)
console.log('Tem Corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem Belina?', carros.indexOf('Belina') >= 0)
