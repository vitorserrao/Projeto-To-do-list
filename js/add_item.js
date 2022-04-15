import { criaId } from './cria_id.js';
let btInserirItem = document.querySelector('#btInserirItem');
let btExcluir = document.querySelector('#btExcluir');
let itemDigitado = document.querySelector('#btCampoItem');
let listaComItem = document.querySelector('#listaComItem').innerHTML;

const btAdd = '<input type="button" value="X" id="btExcluir">';
const check = '<input type="checkbox" id="checkbox">';
let arrayItem = [];

let criaItem = () => {
  let item = {
    id: criaId(),
    nome: itemDigitado.value,
  };

  if (itemDigitado.value != '') {
    arrayItem.push(item);
    listaComItem = listaComItem + '<li id="item">' + check + itemDigitado.value + btAdd + '</li>';
    document.querySelector('#listaComItem').innerHTML = listaComItem;
    console.log(arrayItem);
  }
};

btInserirItem.addEventListener('click', criaItem);
