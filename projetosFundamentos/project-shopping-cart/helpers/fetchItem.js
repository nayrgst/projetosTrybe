const fetchItem = async (eruFunxo) => {
  if (eruFunxo === undefined || eruFunxo.endsWith('undefined')) {
    return new Error('You must provide an url');
  }
    const url = `https://api.mercadolibre.com/items/${eruFunxo}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    return dados;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
