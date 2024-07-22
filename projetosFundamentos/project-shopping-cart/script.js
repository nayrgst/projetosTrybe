const btn = document.querySelector('.empty-cart');
const carrinho = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

 function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const criaProdutos = async () => {
  // pega a classe item para que os produtos sejam incluidos nessa classe
  const produtos = document.querySelector('.items'); 
  // pega a função que está chamando a api com um parametro para chamar um produto
  const dados = await fetchProducts('computador');
  // pega os "dados" de results, que são os produtos da api
  const resultado = dados.results;
  // esse forEach percorre o results e com o paramentro é jogado dentro do objeto pegando o id, title e thumbnail;
  resultado.forEach((produto) => {
    const param = {
      sku: produto.id,
      name: produto.title,
      image: produto.thumbnail,
    };
    // cria filho pra classe items usando a função createProductItemElement com o objeto de parametro
    produtos.appendChild(createProductItemElement(param));
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems('cartItems', carrinho.innerHTML);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// feita baseada na função criaProdutos, feito com a ajuda do Lenon BRABO Rust e Fernando GOSTOSO Bissi
const addCarinho = async (produto) => {
 const cart = document.querySelector('.cart__items');
 const seleciona = produto.target.parentNode;
 const fetch = await fetchItem(getSkuFromProductItem(seleciona));
 const dados = {
   sku: fetch.id, 
   name: fetch.title,
   salePrice: fetch.price,
 };
 cart.appendChild(createCartItemElement(dados));
 saveCartItems('cartItems', carrinho.innerHTML);
};

const esvaziarCarrinho = () => {
 btn.addEventListener('click', () => {
   carrinho.innerHTML = '';
 });
 saveCartItems('cartItems', carrinho.innerHTML);
};

// feito com a ajuda do Lenon BRABO Rust e Fernando GOSTOSO Bissi
window.onload = async () => {
  carrinho.innerHTML = localStorage.getItem('cartItems');
  carrinho.addEventListener('click', cartItemClickListener); // feito com a ajuda do Fernando BRABO Bissi. Esse eventListener salva no localStorage mesmo se a função de remoção de itens for chamada;
  await criaProdutos();
  const clique = document.querySelectorAll('.item__add');
  clique.forEach((botao) => botao.addEventListener('click', addCarinho));
  esvaziarCarrinho();
};