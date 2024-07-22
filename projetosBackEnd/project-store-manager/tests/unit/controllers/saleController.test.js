const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const productServices = require('../../../services/productsServices');
const saleServices = require('../../../services/salesServices');
const saleController = require('../../../controllers/salesControllers');

chai.use(chaiAsPromise);

describe('controllers/salesControllers', () => {
  beforeEach(sinon.restore);

  describe('registerProduct', () => { 
    it('verifica se o saleService dispara algum erro', async () => { 
      sinon.stub(saleServices, 'validatorBody').rejects();
      chai.expect(saleController.registerProduct({}, {})).to.eventually.be.rejected;
    })
  })

    it('verifica se a saleServices retorna o status 201 caso não tenha nenhum erro', async () => {
      const req = {};
      req.body = [{ "productId": 1, "quantity": 1}];
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      };

      sinon.stub(saleServices, 'validatorBody').resolves({});
      sinon.stub(productServices, 'listProductById').resolves({});
      sinon.stub(saleServices, 'createProduct').resolves({});
      await saleController.registerProduct(req, res);
      chai.expect(res.status.getCall(0).args[0]).to.equal(201);
      chai.expect(res.json.getCall(0).args[0]).to.be.deep.equal({})
    })
  })
