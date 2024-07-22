require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se a fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se fetch foi chamado com o argumento ("computador")', () => {
    fetchProducts('');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se fetch está pegando o url do API correto', () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url)
  });

  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const vrf = await fetchProducts('computador')
    expect(vrf).toEqual(computadorSearch)
  });

  it('Verifica se não colocar nenhum paramentro retorna o erro "You must provide an url"', async () => {
    const erro = await fetchProducts() || fetchProducts('')
    expect(erro).toEqual(new Error('You must provide an url'))
  });
});
