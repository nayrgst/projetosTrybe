const fetchProducts = async (funxo) => {
  // feito com a ajuda do Cassio Lindo Gabriel e do Fernando GOSTOSO Bissi
  if (funxo === undefined || funxo.endsWith('undefined')) {
    return new Error('You must provide an url');
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${funxo}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    return dados; 
};
// console.log(fetchProducts('computador')); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
