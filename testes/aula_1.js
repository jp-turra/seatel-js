// Mozilla Developer    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
// W3                   https://www.w3schools.com/jsref/default.asp

// 1) Variáveis
const constante = 0                  // Constante
var variavel = "Olá!"                // Var. global
let variavel2 = "Sou outra variável" // Var. local

if (constante == 0) {
    let local = "Somente local"
    var global = "Sou global hehe"

    console.log('local-If ', local)
    console.log('global-If ', global)
}
// console.log('local ', local)
console.log('global ', global)

let string = ''
let inteiro = 0
let float = 0.0
let bolean = true
let vetor = []      // Semelhante a listas em pyhton
let objeto = {}     // Semelhante a json

// 2)   Operadores

/*  +
 *  -                 
 *  /
 *  * 
*/

let num = 3
let aux = 4

console.log('Operacao', num * aux )

num += 1
console.log('auto-op ', num)


// 3)   Estruturas condicionais
// 3.1) IF

/*  Operadores de comparação:
 *  ==          'igualdade'
 *  !=          'diferença'
 *  < ou >      'maior ou menor'
 *  <= ou >=    'maior igual ou menor igual'
 *  !           'negado ou não existente'
 *  Estrutura do 'IF'
 * 
 *  if (condicao) {
 *      ação caso a condição seja satisfeita
 *  }else if (outraCondicao) {
 *      outra ação caso a condição seja satisfeita
 *  }else {
 *      ação caso nenhuma outra condição seja satisfeita
 *  }
*/

let carrinho = 'resistor'
let total = 0
if (carrinho == 'capacitor') {
    total += 0.5
} else if (carrinho == 'resistor') {
    total += 0.1
} else if (carrinho == 'indutor') {
    total += 0.35
} else {
    total += 1
}
console.log('total em carrinho ', total)

/* Switch ( mesma coisa que o if ) 
 *  switch (variavel) {
 *      case valor:
 *           ação
 *      break;
 *
 *      default:
 *          ação
 *      break;
 *  }
*/

total = 0
switch (carrinho) {
    case "capacitor":
        total += 0.5
    break;

    case "resistor":
        total += 0.1
    break;

    case "indutor":
        total += 0.35
    break;

    default:
        total += 1
    break;
}

/* Operador ternário ( ? )
 * Tipo uma pergunta... A variável é tal valor ? se sim faz isso : se não faz outro
*/
let ternario = total > 0.1 ? 'É cap ou indut' : 'É resistor ou nada'

// 3)   Estruturas de repetição
// 3.1) While

i = 0
while (i < 10) {
    console.log(i)
    i += 1
}

do {
    console.log(i)
    i += 1
}while (i == 10) 

const letras = ['A', 'B', 'C']
for (let index = 0; index < letras.length; index++) {
    console.log(letras[index])
}

for (let letra in letras) {
    console.log(letra)
}

// Funões
console.log('a' < 'b')
function ordenarTamanho(palavras) {
    return palavras.sort((a, b) => {
        return b.length - a.length
    })
}

let listao = ['jorge', 'maria', 'carlos', 'diana', 'tavares', 'silvia', 'alves', 'gio', 'antunes']
console.log(ordenarTamanho(listao))