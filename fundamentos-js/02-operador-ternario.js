let media = 7.6, situacao

if(media >= 6) {
  situacao = 'APROVADO'
}
else {
  situacao = 'Reprovado'
}

console.log('Situação do aluno com média', media, 'é', situacao, '.')

/*
  Decidindo a situação do aluno usando o operador ternário
*/
media = 5.1

situacao = media >= 6 ? 'APROVADO' : 'Reprovado'

console.log('Situação do aluno com média', media, 'é', situacao, '.')

//------------------------------------------------------------

let user = 'guest', msg

/*
  Decidindo se o usuário pode entrar ou não usando if..else
  
  Quando há apenas uma linha de código após um if, while, etc.,
  podemos omitir as chaves
*/
if(user === 'admin') msg = 'Bem-vindo!'
else msg = 'Acesso negado.'

console.log(user, msg)

// Tomando a mesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'Bem-vindo!' : 'Acesso negado.'
console.log(user, msg)