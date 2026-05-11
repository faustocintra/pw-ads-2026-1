//alguns dados de um usuario
const fullname = 'Jonicleisson Junqueira Junior'
const username = 'Junin'
const group = 'alunos'

//criando um objeto a partir das variaveis acima

const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/* quando o nome da propriedade de um objeto é identico à da variavel que lhe
dará o valor, é possível usar a sintaxe chamada propriedade abreviada. Ela permite não repetir os nomes das vairiaveis
à frente dos nomes das proriedades */

const user2 = {
    fullname,
    username, 
    group
}
console.log(user2)  

//um objetivo pode mesclar proriedade abreviadas e não abreviadas
const user3 = {
    fullname,
    username, 
    password: 'OPalmeirasNaoTemMundial',
    group,
    lastLogin: '2026-03-02 11:27:35'
}
console.log(user3)

/* usando propriedades abreviadas para depuração (debug)*/
const x = 10, y = 'batata'
/* exibindo o valor das duas variáveis com console.log().
Observe que os valores são mostrados, mas a saída não informa quais as variáveis de onde provem os valores. */
console.log(x, y)
/* saida melhorada: passando um objeto formando pelas variáveis como propriedades
abreviadas para o console.log(), conseguiimos identificar de onde vem os valores */
console.log({x, y})