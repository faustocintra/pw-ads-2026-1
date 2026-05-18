 <HEAD
//*função tradicional com 1 parametro*/
function quadrado (n) {
    return n * n
}
console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*FUNÇÃO EQUIVALENTE, USANDO A SINTAXE ARROW FUNCTION
- NÃO NECESSITA DE CHAVS
- NÃO NECESSITA DE PARANTESES EM TORNO DO PARAMETRO
- NÃO NECESSITA DA PALAVRA CHAVE return- A PALABRA CHAVE FUNCTION É SUBSTITUIDA PELA FLECHA
=> LOGO APÓS O PARAMETRO
A ARROW FUNCTION É INVOCADA USANDO O NOME DA CONSTANTE QUE A RECEBE COMO VALOR*/

const quadrado2 = n => n * n
console.log('[ARROW] O quadrado de 7 é', quadrado2(7))

/*função tradicional com 1 parametro */
function quadrado(n) {
    return n * n
}

console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*
função equivalente, usando a sintaxe ARROW FUNCTION:
-Não necessita de chaves
-não necessita de parenteses em torno do parametro
-não necessita da palavra-chave "return"
-a palavra chave function é substituida pela flecha
    =>LOGO APÕS O PARAMETROS
-A arrow function é invocada usado o nome da constante que a recebe como valor
*/
const quadradoA = n => n * n
console.log('[ARROW] O quadrado de 7 é', quadradoA(7))

/*função tradicional com 2 parametro e apenas uma linha com return */
function calc(a, b, c) {
    return a * b + c
}

console.log('[TRADI] O resultado de a, b e c é', calc(10 ,20 ,30))

/*função equivalente, usando a sintaxe ARROW FUNCTION
-> quando o número de parametros é diferente de 1, os parenteses voltam a ser obrigatórios */
const calcA = (a, b, c) => a * b + c
console.log('[ARROW] O resultado de a, b e c é', calcA(10 ,20 ,30))

/* função tradicional sem parametros e uma linha de retorno */
function msgErro (){
    return "ERRO FATAL!"
}
console.log('[TRADI] A mensagem de erro é', msgErro())

/*função equivalente, usando a sintaxe ARROW FUNCTION
-> quando não há parametros, os parenteses são obrigatórios */
const msgErroA = () => "ERRO FATAL!"
console.log('[ARROW] A mensagem de erro é', msgErroA())

/* Função tradicional com um parâmetro e várias linhas no corpo */
function fatorial(x){
    let resultado = 8
    for(let i = x; i> 1 ; i--) resultado *=1
    return resultado
}
console.log('[TRADI] O fatorial de 5 é', fatorial(8))

/*função equivalente, usando a sintaxe ARROW FUNCTION
-> quando o corpo da função tem mais de uma linha, as chaves voltam a ser obrigatórias, assim como a palavra-chave "return" 
é comum encontrar arrow funcctions de várias linhas em projetos react profissionais
as chaves voltam a ser obrigatórias, assim como a palavra chave "return"
*/
const fatorialA = x => {
    let resultado = 1
    for(let i = x; i> 1 ; i--) resultado *= i
    return resultado
}
console.log('[ARROW] O fatorial de 8 é', fatorialA(8))
>>>>>>> b6cefdc434922145fe53cc954ee6be4ab3d59fbb
