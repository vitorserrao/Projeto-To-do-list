import { criaId } from './cria_id.js';
export function addItem() {
  let btInserirItem = document.querySelector('#btInserirItem');
  let itemDigitado = document.querySelector('#btCampoItem');
  let listaComItem = document.querySelector('#listaComItem');
  let arrayItem = [];

  btInserirItem.onclick = () => {
    let item = {
      id: criaId(),
      nome: itemDigitado.value,
    };

    if (itemDigitado.value) {
      const btEx = `<input type="button" value="Eliminar" class="btExcluir" id="item-${item.id}">`;
      const check = '<input type="checkbox" id="checkbox">';
      const li = document.createElement('li');
      li.innerHTML = `${check} <span >${itemDigitado.value}</span> ${btEx}`;
      listaComItem.appendChild(li);
      arrayItem.push(item);
      itemDigitado.value = '';
    }
  };
}
