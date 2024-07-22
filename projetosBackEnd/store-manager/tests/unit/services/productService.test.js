const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const productsServices = require('../../../services/productsServices');
const productModel = require('../../../models/productsModels');

chai.use(chaiAsPromise);

describe('services/productsServices', () => {
  beforeEach(sinon.restore);

  describe('listAllProducts', () => {
    it('verifica se o productModel da listAllProducts dispara algum erro', async () => { 
      sinon.stub(productModel, 'listAllProducts').rejects();
      chai.expect(productsServices.listAllProducts()).to.eventually.be.rejected;
    })

    it('verifica se listAllProducts retarna um array de objetos com as informações', async () => { 
      sinon.stub(productModel, 'listAllProducts').resolves([{}]);
      chai.expect(productsServices.listAllProducts()).to.eventually.equal([{}]);
    })
  })

  describe('listProductById', () => {
    it('verifica se o listproductById da listProductById dispara algum erro', async () => { 
      sinon.stub(productModel, 'listProductById').rejects();
      chai.expect(productsServices.listProductById(1)).to.eventually.be.rejected;
    })

    it('verifica se listProductById retarna um array de objetos do id especifico com as informações', async () => { 
      sinon.stub(productModel, 'listProductById').resolves([{}]);
      chai.expect(productsServices.listProductById(1)).to.eventually.equal({})
    })

    it('verifica se listProductById retorna a mensagem Product not found, caso de erro', () => {
      sinon.stub(productModel, 'listProductById').resolves(undefined);
      const erro = productsServices.listProductById('xablau')
      chai.expect(erro).to.eventually.throw(Error);
    })
  })

  describe('registerProduct', () => { 
    it('verifica se o productModel da registerProduct dispara algum erro', async () => { 
      sinon.stub(productModel, 'registerProduct').rejects();
      chai.expect(productsServices.registerProduct()).to.eventually.be.rejected;
    })

    it('verifica se registerProduct retorna corretamente', async () => { 
      sinon.stub(productModel, 'registerProduct').resolves([{}]);
      chai.expect(productsServices.registerProduct()).to.eventually.equal([{}]);
    })
  })
})