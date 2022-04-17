import { criaId } from './cria_id.js';
import { poup } from './poup.js';

export function addItem() {
  let btInserirItem = document.querySelector('#btInserirItem');
  let itemDigitado = document.querySelector('#btCampoItem');
  let listaComItem = document.querySelector('#listaComItem');
  let popup = document.querySelector('#popup');
  let valorDigitado = document.querySelector('.valorDigitado'); //preço do produto
  let arrayItem = [];

  // cria os elementos e add na tela
  const criaElemento = (produto, id, estado) => {
    const li = document.createElement('li');
    let btEx = document.createElement('button');
    let check = `<input type="checkbox" data-id=${id} ${estado}>`;
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
      const alvoClick = evento.target;
      const buscaIndice = arrayItem.forEach((obj, i) => {
        if (alvoClick.type === 'submit' && obj.id == alvoClick.id) {
          listaComItem.innerHTML = '';
          arrayItem.splice(i, 1);
          lerArrayItem();
        }
      });
    });
  };
  // ler array com item a serem criados
  const lerArrayItem = () => {
    arrayItem.forEach((obj) => {
      return criaElemento(obj.produto, obj.id, obj.estado);
    });
  };

  // checkbox verifica o estado do item e modifica no array
  // pois isso ele modifica o estilo da div aparecendo/desaparecendo o popup
  //
  const checkbox = () => {
    listaComItem.addEventListener('click', (evento) => {
      const click = evento.target;
      const procuraIndice = arrayItem.forEach((obj, i) => {
        if (click.type === 'checkbox' && obj.id == click.dataset.id) {
          (arrayItem[i].estado = arrayItem[i].estado === '' ? 'checked' : ''), (popup.style.display = 'block');
          popup.onclick = () => {
            if (valorDigitado.value) {
              arrayItem[i].valor = valorDigitado.value;
              valorDigitado.value = '';
              popup.style.display = 'none';
              console.log(arrayItem[i].valor.type);
            }
          };
        }
      });
    });
  };

  const calcValor = () => {
    let calc = arrayItem.reduce((total, obj) => {
      return total + Number(obj.valor);
    }, 0);
  };
  checkbox();
  btInserirItem.onclick = () => {
    if (itemDigitado.value) {
      listaComItem.innerHTML = '';
      let item = {
        id: criaId(),
        produto: itemDigitado.value,
        estado: '',
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
