const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const productServices = require('../../../services/productsServices');
const productController = require('../../../controllers/productsControllers');

chai.use(chaiAsPromise);

describe('controllers/productsControllers', () => { 
  beforeEach(sinon.restore);

  describe('listAllProducts', () => { 
    it('verifica se o productService dispara algum erro', async () => { 
      sinon.stub(productServices, 'listAllProducts').rejects();
      chai.expect(productController.listAllProducts({}, {})).to.eventually.be.rejected;
    })

    it('verifica se o productService da listAllProducts dispara erro 404', async () => { 
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      }

      sinon.stub(productServices, 'listAllProducts').resolves(undefined)
      await productController.listAllProducts({}, res)
      
      chai.expect(res.status.getCall(0).args[0]).to.equal(404)
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal({message: 'Product not found'})
    }) 

    it('verifica se listAllProducts retarna um array de objetos com as informações com status 200', async () => {
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      }

      sinon.stub(productServices, 'listAllProducts').resolves([{}])
      await productController.listAllProducts({}, res)
      
      chai.expect(res.status.getCall(0));
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
     })
  })

  describe('listProductById', () => {
    it('verifica se o productService dispara algum erro', async () => { 
      sinon.stub(productServices, 'listProductById').rejects();
      chai.expect(productController.listProductById({}, {})).to.eventually.be.rejected;
    })

    it('verifica se o productService da listProductById dispara erro 404', async () => { 
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      }
      
      sinon.stub(productServices, 'listProductById').rejects();
      await productController.listProductById({}, res)

      chai.expect(res.status.getCall(0).args[0]).to.equal(404)
    })

    it('verifica se listProductById retarna um array de objetos do id especifico com as informações com status 200', async () => { 
      const req = { params: { id: 1 } }
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns()
      }

      sinon.stub(productServices, 'listProductById').resolves({})
      await productController.listProductById(req, res)
      
      chai.expect(res.status.getCall(0));
      chai.expect(res.json.getCall(0).args[0]).to.deep.equal({});
    })
  })

  describe('registerProduct', () => { 
    it('verifica se o productService da registerProduct dispara algum erro', async () => { 
      sinon.stub(productServices, 'registerProduct').rejects();
      chai.expect(productController.registerProduct({}, {})).to.eventually.be.rejected;
    })

    it('verifica se o registerProduct retorna um status 201 caso não tenha erro', async () => { 
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns()
      }

      sinon.stub(productServices, 'validatorBody').resolves();
      sinon.stub(productServices, 'registerProduct').resolves();
      sinon.stub(productServices, 'listProductById').resolves({id: 1});
      await productController.registerProduct({}, res);
      
      chai.expect(res.status.getCall(0).args[0]).to.equal(201);
      chai.expect(res.json.getCall(0).args[0]).to.be.deep.equal({ id: 1 })
    })
  })

})

