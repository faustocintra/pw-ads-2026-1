let media = 7.6, situacao
if (media >= 6) {
        situacao = 'APROVADO'
} else {
        situacao = 'REPROVADO'
}
console.log('Situação do aluno com média', media, 'é', situacao, '-')
/* decidindo a situação do aluno usando o operador ternário
*/
media = 5.1
situacao = media >=6 ? 'APROVADO' : 'REPROVADO'
console.log('Situação do aluno com média', media, 'é', situacao, '-')

let user  = 'guest', msg
/* decidindo se o usuoario pode entrar ou não usando if ... else
    quando ha apenas uma linha de codigo apos um if, while, etc, podemos omitir as chaves */
if (user === 'admin') msng = 'Bem vindo!'
else msg = 'Acesso negado. '
console.log(user, msg)

//tomando a mesma decisãop, mas usando o operador ternário
msg = user === 'admin' , 'bem vindo', 'acesso negado.'
console.log(user, msg)


/* = atribuição
== comparação de valor
=== comparação de valor e tipo
*/