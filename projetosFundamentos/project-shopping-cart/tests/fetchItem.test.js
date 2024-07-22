require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se a fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se fetch foi chamado com o argumento "MLB1615760527"', () => {
    fetchItem('');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se fetch está pegando o url do API correto', () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527"
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url)
  });

  it('Verifica se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const vrf = await fetchItem('MLB1615760527')
    expect(vrf).toEqual(item)
  });

  it('Verifica se não colocar nenhum paramentro retorna o erro "You must provide an url"', async () => {
    const erro = await fetchItem() || fetchItem('')
    expect(erro).toEqual(new Error('You must provide an url'))
  });
});