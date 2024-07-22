const criarTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const listas = document.querySelector('#lista-tarefas');
const clean = document.querySelector('#apaga-tudo')
const remover = document.querySelector('#remover-finalizados')

function criar() {
  const lista = document.createElement('li');
  lista.className = 'lis';
  lista.innerText = inputTarefa.value;
  listas.appendChild(lista);
  inputTarefa.value = '';
}

criarTarefa.addEventListener('click', criar);

// feito com base no meu codigo do projeto pixel arte, com a ajuda do Gean Antunes e https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty
function cor(event) {
  const get = document.querySelectorAll('.lis');
  for (let index = 0; index < get.length; index += 1) {
  get[index].style.removeProperty('background-Color');
  };
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
};

  listas.addEventListener('click', cor);

  //feito com a ajuda do DEUS Gabriel Pondaco e no site https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList.
function finalizadas(element) {
  element.target.classList.toggle('completed');
};

listas.addEventListener('dblclick', finalizadas);

function clear() {
  listas.innerHTML = '';
};
  clean.addEventListener('click', clear); 

function remove() {
  const all = document.querySelectorAll('.completed');
  for ( let index = 0; index < all.length; index += 1) {
    all[index].remove();
  }
};
  remover.addEventListener('click', remove);
