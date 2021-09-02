// https://www.w3schools.com/js/js_htmldom_document.asp
// alert("Bora la!"); // Cria um popup

// Recuperar elemento na DOM (Document Object Model)
// document.getElementById(id)	Acha um elemento pelo id
// document.getElementsByTagName(name)	Acha elemento pela noma da Tag
// document.getElementsByClassName(name)	Acha elemento(s) pela classe

// console.log(document);

const btn = document.getElementById("botao");
// // https://www.w3schools.com/js/js_htmldom_events.asp
// // Definindo uma função
btn.addEventListener("click", () => {
  let text = document.getElementsByClassName("texto");
  text = text[0];
  text.innerText = "AOOOOO NOVO TEXT";
});

// document.querySelectorAll(parametro) Seletor geral de elementos [retorna uma lista]
// document.querySelector(parametro) Seletor geral de elemento
let text = document.querySelector("div#text"); // # para IDs e '.' para clases
console.log("novo text ", text);
text.addEventListener("click", () => {
  text.innerText = " Zerado ";
});

// https://quasar.dev/
