const linhas = 5;
const quadro = document.querySelector('#pixel-board');
const preto = document.querySelector('#black');
const azul = document.querySelector('#blue');
const laranja = document.querySelector('#orange');
const vermelho = document.querySelector('#red');
const clean = document.querySelector('#clear-board');
let randomColor = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
let randomColor2 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
let randomColor3 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];

// consegui fazer a função para deixar as divs mais simples e faceis de manipular com a ajuda do Leonardo Gonçalves turma 19 - T B
function createDiv() {
  const square = document.getElementById('pixel-board');
    for (let index = 1; index <= linhas; index += 1){
    const li = document.createElement('div');
    li.className = 'linha';
    square.appendChild(li);
    for (let i = 1; i <= linhas; i += 1){
      const co = document.createElement('div')
      co.className = 'pixel';
      li.appendChild(co);
      }
    }
}

  createDiv()
  function clear() {
    clean.addEventListener('click', function() {
    let get = document.querySelectorAll('.pixel');
    for(let index = 0; index < get.length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
    };
  });
};
  clear();
function createColor (event) {
    let selecionar =  document.querySelector('.selected');
    selecionar.classList.remove('selected');
    event.target.classList.add('selected');
  }

  preto.addEventListener('click', createColor);
  azul.addEventListener('click', createColor);
  laranja.addEventListener('click', createColor);
  vermelho.addEventListener('click', createColor);


  function paint(element) {
  let pincel = document.querySelector('.selected').style.backgroundColor;
  element.target.style.backgroundColor = pincel;
  };

  quadro.addEventListener('click', paint);


    // feito com a ajuda do Leonardo Gonçalves e do site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
  preto.style.backgroundColor = 'black';
  azul.style.backgroundColor = '#' + randomColor;
  laranja.style.backgroundColor = '#' + randomColor2;
  vermelho.style.backgroundColor = '#' + randomColor3;

    
