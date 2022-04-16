import { criaId } from './cria_id.js';
import { poup } from './poup.js';

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
      const btEx = document.createElement('button');
      btEx.setAttribute('id', `'${item.id}'`);
      btEx.setAttribute('class', 'btExcluir');
      btEx.innerHTML = 'X';

      const check = `<input type="checkbox" id="checkbox">`;
      const li = document.createElement('li');
      li.innerHTML = `${check} <span id="item">${itemDigitado.value}</span>`;
      li.appendChild(btEx);
      listaComItem.appendChild(li);
      arrayItem.push(item);
      console.log(arrayItem);
      itemDigitado.value = '';
      //poup();
      btEx.onclick = () => {
        listaComItem.removeChild(li);
      };
    }
  };
}
