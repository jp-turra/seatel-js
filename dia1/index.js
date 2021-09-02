// Variáveis JS

/* const constante = 20210901;

if (constante == 20210901) {
  let variavel_local = " Ola ! ";
  var variavel_global = true;
  console.log("dentro do if: ", variavel_local);
} */

// Estrutura Condicional
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

// var titulo = "outra coisa";

// if (titulo != "javaScript") {
//   titulo = "beleza";
// }
// console.log(titulo);
// if (titulo != "seatel") {
//   console.log("Esta rolando o evento");
// }
// console.log(titulo);

// let a = 0;
// const b = -1;

// if (a == b) {
//   console.log("menor");
// } else if (a == 1) {
//   console.log("1");
// } else if (b < 0) {
//   console.log("> 0");
// } else {
//   console.log("outros");
// }

// let a = 1;
// switch (a) {
//   case 0:
//     console.log("alguma coisa");
//     break;

//   case 2:
//     console.log("outra coisa");
//     break;

//   default:
//     console.log("lalala");
//     break;
// }

// Laço de repetição

// while ou for

// let condicao = true;
// let contador = 0;
// while (condicao) {
//   console.log(contador, condicao);
//   contador = contador + 1; // isso é igual a ' contador += 1 '
//   if (contador == 200) {
//     condicao = false;
//   }
//   console.log(contador, condicao);
// }

// let strings = " sdadsadsadsa ";
// let num = 90.2;
// let bool = false;

// let vetor = [
//   ["alo", bool, strings],
//   ["alo", bool, strings],
// ];
// // Index smp começa do 0
// // console.log(vetor);
// // for (let coluna = 0; coluna < vetor.length; coluna++) {
// //   for (let linha = 0; linha < vetor[coluna].length; linha++) {
// //     console.log(coluna, linha, vetor[coluna][linha]);
// //   }
// // }

// // in -> retorna a posicao ou key
// // of -> valor em si
// for (let index in vetor) {
//   console.log(vetor[index]);
// }

// const objetos = {
//   chave: "valor",
// };
// let key = "chave";
// console.log(objetos[key]);

// function ordenar(lista) {
//   console.log("tamanho", lista.length);
//   return lista.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
// }

// function print(comando) {
//   console.log(comando);
// }
// let array = ["alo", "bool", "strings", "antionio", "carla", "jose", "flavia"];

// print("alg");
// import * as modulo from "./modulo.js"; // import js no dev web

// import * as modulo from "./modulo.mjs";
// const random = require("random");
// const modulo = require('./modulo.js')

async function asinc() {
  console.log("aqui");
  return 1;
}

function main() {
  console.log("aqui2");
}

async function debug() {
  const resposta = await asinc();
  console.log(resposta);
  main();
}
debug();

// for (let i = 0; i < 100; i++) console.log("");
// main();
