import { criaId } from './cria_id.js';
import { poup } from './poup.js';

export function addItem() {
  let btInserirItem = document.querySelector('#btInserirItem');
  let itemDigitado = document.querySelector('#btCampoItem');
  let listaComItem = document.querySelector('#listaComItem');
  let arrayItem = [];

  // cria os elementos e add na tela
  const criaElemento = (produto, id) => {
    const li = document.createElement('li');
    let btEx = document.createElement('button');
    let check = `<input type="checkbox" data-id=${id}>`;
    btEx.setAttribute('class', 'btExcluir');
    btEx.setAttribute('id', `${id}`);
    btEx.innerHTML = 'X';
    li.innerHTML = `${check} <span id="item">${produto}</span>`;
    li.appendChild(btEx);
    listaComItem.appendChild(li);
  };

  let excluiItem = () => {
    listaComItem.addEventListener('click', (evento) => {
      //buscaIndice prcura na arrayItem qual indice tem o id que foi clicado
      const buscaIndice = arrayItem.forEach((obj, i) => {
        if (obj.id == evento.target.id) {
          listaComItem.innerHTML = '';
          console.log(arrayItem);
          arrayItem.splice(i, 1);
          console.log(arrayItem);
          lerArrayItem();
        }
      });
    });
  };
  // ler array com item a serem criados
  const lerArrayItem = () => {
    arrayItem.forEach((obj) => {
      return criaElemento(obj.produto, obj.id);
    });
  };

  btInserirItem.onclick = () => {
    if (itemDigitado.value) {
      listaComItem.innerHTML = '';
      let item = {
        id: criaId(),
        produto: itemDigitado.value,
        valor: '',
      };
      arrayItem.push(item);
      lerArrayItem();
      console.log(arrayItem);
      itemDigitado.value = '';

      //poup();
      // btEx.onclick = () => {
      // listaComItem.removeChild(li);
      //};
    }
  };
  excluiItem();
}
