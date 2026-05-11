const carros = ['Chevette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/* o método includes () testa se um determinado elemento existe no vetor.
Retorno true se existir, ou false, caso contrário */

console.log('tem fusca?', carros.includes('Fusca')) //true
console.log('Tem Corcel?', carros.includes('Corcel')) //false
console.log('Tem Belina?', carros.includes('Belina')) //true

/* O método indexOf() retorna o indice (posição) de um elemento no velor. Caso o elemento não exista, ele retorna -1 */

console.log('Posição de Maverick: ', carros.indexOf('Maverick')) //3
console.log('Posição de Chevette: ', carros.indexOf('Chevette')) //0
console.log('Posição de Kombi: ', carros.indexOf('Kombi')) //-1

/* o método includes() só passou a ser parte da linguagem JS a partir do ES6, por isso, em versões anteriores, 
o indexOf() era usado para verificar se um elemento existia ou não no vetor, verificando se o retorno era diferente de -1 */

console.log('Tem fusca?', carros.indexOf('Fusca') >=0) //true
console.log('Tem Corcel?', carros.indexOf('Corcel') >=0) //false
console.log('Tem Belina?', carros.indexOf('Belina') >=0) //true