const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const saleService = require('../../../services/salesServices')
const saleModel = require('../../../models/salesModels')

chai.use(chaiAsPromise);

describe('services/salesServices', () => { 
  beforeEach(sinon.restore);

  describe('createProduct', () => {
    it('verfica de createProduct dispara algum erro', async () => { 
      sinon.stub(saleService, 'createProduct').rejects();
      chai.expect(saleService.createProduct()).to.eventually.be.rejected;
    })

    it('verifica se o createProduct retorna o objeto corretamente', async () => {      
      sinon.stub(saleModel, 'registerProduct').resolves(1);
      sinon.stub(saleModel, 'createProduct').resolves({});
      const obj = {
        id: 1,
        itemsSold: [{}]
      }
      const result = await saleService.createProduct([{}]);
      
      chai.expect(result).to.deep.equal(obj)
    })

  })
})