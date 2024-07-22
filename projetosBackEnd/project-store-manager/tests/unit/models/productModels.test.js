const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const db = require('../../../models/db');
const productModel = require('../../../models/productsModels');

chai.use(chaiAsPromise);

describe('models/productsModels', () => { 
  beforeEach(sinon.restore);

  describe('listAllProducts', () => { 
    it('verifica se dispara um erro caso o db tenha algum erro', async () => { 
      sinon.stub(db, 'query').rejects();
      chai.expect(productModel.listAllProducts()).to.eventually.be.rejected;
    })

    it('verifica se listAllProducts retarna um array de objetos com as informações', async () => { 
      sinon.stub(db, 'query').resolves([{}]);
      chai.expect(productModel.listAllProducts()).to.eventually.deep.equal([{}]);
    })
  })


  describe('listProductById', () => { 
    it('verifica se dispara um erro caso o db tenha algum erro', async () => { 
      sinon.stub(db, 'query').rejects();
      chai.expect(productModel.listProductById(1)).to.eventually.be.rejected;
    })

    it('verifica se listProductById retorna um array de objetos do id especifico com as informações', async () => { 
      sinon.stub(db, 'query').resolves([[{}]]);
      chai.expect(productModel.listProductById(1)).to.eventually.deep.equal({});
    })

    it('verifica caso o listProductById não retorne o item', async () => { 
      sinon.stub(db, 'query').resolves([[]]);
      chai.expect(productModel.listProductById(1)).to.eventually.be.undefined;
    })
  })

  describe('registerProduct', () => { 
    it('verifica se dispara um erro caso o db tenha algum erro', async () => { 
      sinon.stub(db, 'query').rejects();
      chai.expect(productModel.registerProduct()).to.eventually.be.rejected;
    })

    it('verifica se registerProduct faz a requisição corretamente', async () => { 
      sinon.stub(db, 'query').resolves([[{}]])
      chai.expect(productModel.registerProduct({})).to.eventually.be.equal([[{}]]);
    })
  })
})