const nome = 'Valcicleide';
const idade = 20;
const cidade = 'Morro Alto de Cima/MG';

//mesclando strings com vari[áveis usando contatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.';
console.log(msg1)

/* mesclando strings e variáveis usando template strings
template strings são obrigatoriamente delimitados por '' (backtickes/acentos graves) e as variáveis são inseridas usando a sintaxe ${variável} */
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

//dentro de uma template string, não estamos limitados à usar 
//apenas variaveis dentro do simbolo ${},. qualquer código js valido pode ser empregado ali
console.log(`EM ${2026 + 7} ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)