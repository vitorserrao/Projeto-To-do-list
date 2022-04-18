import { criaId } from './cria_id.js';

let btInserirItem = document.querySelector('#btInserirItem');
let itemDigitado = document.querySelector('#btCampoItem');
let listaComItem = document.querySelector('#listaComItem');
let popup = document.querySelector('#popup');
let valorDigitado = document.querySelector('.valorDigitado'); //preço do produto
let preco = document.querySelector('#preco');

const localLista = JSON.parse(localStorage.getItem('listaItem'));
let listaItem = localStorage.getItem('listaItem') !== null ? localLista : [];

const setLocalList = () => {
  localStorage.setItem('listaItem', JSON.stringify(listaItem));
};

// cria os elementos e add na tela
const criaElemento = (produto, id, estado) => {
  const li = document.createElement('li');
  const btEx = document.createElement('button');
  const check = `<input type="checkbox" data-id=${id} ${estado}>`;
  btEx.setAttribute('class', 'btExcluir');
  btEx.setAttribute('id', `${id}`);
  btEx.innerHTML = 'X';
  li.innerHTML = `${check} <span id="item">${produto}</span>`;
  li.appendChild(btEx);
  listaComItem.appendChild(li);
};

let excluiItem = () => {
  listaComItem.addEventListener('click', (evento) => {
    //buscaIndice prcura na listaItem qual indice tem o id que foi clicado
    const alvoClick = evento.target;
    const buscaIndice = listaItem.forEach((obj, i) => {
      if (alvoClick.type === 'submit' && obj.id == alvoClick.id) {
        listaComItem.innerHTML = '';
        listaItem.splice(i, 1);
        setLocalList();
        calcValor();
        lerlistaItem();
      }
    });
  });
};
// ler array com item a serem criados
const lerlistaItem = () => {
  listaItem.forEach((obj) => {
    return criaElemento(obj.produto, obj.id, obj.estado);
  });
};

// checkbox verifica o estado do item e modifica no array
// pois isso ele modifica o estilo da div aparecendo/desaparecendo o popup
//
const checkbox = () => {
  listaComItem.addEventListener('click', (evento) => {
    const click = evento.target;
    const procuraIndice = listaItem.forEach((obj, i) => {
      if (click.type === 'checkbox' && obj.id == click.dataset.id) {
        (listaItem[i].estado = listaItem[i].estado === '' ? 'checked' : ''), (popup.style.display = 'block');
        setLocalList();
        popup.onclick = () => {
          if (valorDigitado.value) {
            listaItem[i].valor = valorDigitado.valueAsNumber;
            calcValor();
            setLocalList();
            valorDigitado.value = '';
            popup.style.display = 'none';
          }
        };
      }
    });
  });
};

const calcValor = () => {
  const listaPreco = listaItem.map((itens) => itens.valor);

  listaItem[0].valorTotal = listaPreco.reduce((soma, itens) => soma + itens, 0);
  setLocalList();
  preco.innerHTML = `<div id="preco"><H1>R$ ${listaItem[0].valorTotal}</H1></div>`;
  console.log(listaItem[0].valorTotal);
};

checkbox();
const clickBtInserir = (evento) => {};
btInserirItem.onclick = () => {
  if (itemDigitado.value) {
    listaComItem.innerHTML = '';
    let item = {
      id: criaId(),
      produto: itemDigitado.value,
      estado: '',
      valor: '',
      valorTotal: '',
    };
    listaItem.push(item);
    setLocalList();
    lerlistaItem();
    itemDigitado.value = '';

    //poup();
    // btEx.onclick = () => {
    // listaComItem.removeChild(li);
    //};
  }
};
excluiItem();
lerlistaItem();
calcValor();
