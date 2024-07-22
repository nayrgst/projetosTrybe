const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const db = require('../../../models/db')
const saleModel = require('../../../models/salesModels');

chai.use(chaiAsPromise)

describe('models/salesModels', () => { 
  beforeEach(sinon.restore);

  describe('registerProduct', () => {
    it('verifica se a registerProduct da saleModel dispara algum erro', () => {
      sinon.stub(db, 'query').rejects();
      chai.expect(saleModel.registerProduct()).to.eventually.be.rejected;
    })

    it('verifica se registerProduct da saleModel faz a requisição corretamente', async () => { 
      sinon.stub(db, 'query').resolves([{}])
      chai.expect(saleModel.registerProduct({})).to.eventually.be.equal([{}]);
    })
  })

  describe('createProduct', () => { 
    it('verifica se a createProduct da saleModel dispara algum erro', () => {
      sinon.stub(db, 'query').rejects();
      chai.expect(saleModel.createProduct()).to.eventually.be.rejected;
    })

    it('verifica se createProduct da saleModel faz a requisição corretamente', async () => { 
      sinon.stub(db, 'query').resolves([{ insertId: 1 }])
      chai.expect(saleModel.createProduct(1, {})).to.eventually.be.equal(1);
    })
  })
})

