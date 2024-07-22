import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
import Users from '../database/models/Users';
chai.use(chaiHttp);


describe('post /login', () => {
  beforeEach(sinon.restore);

  it('Verfica se a login vai retornar o status 400 caso não tenha um email', async () => {
    sinon.stub(Users, 'findOne').resolves()
    const emailVrf = {"password": "senhasuperhipermegasecreta"}

    const response = await chai.request(app).post('/login').send(emailVrf)
    chai.expect(response.status).to.equal(400);
    chai.expect(response.body.message).to.deep.equal('All fields must be filled');
  })

  it('Verfica se a login vai retornar o status 400 caso não tenha um password', async () => {
    sinon.stub(Users, 'findOne').resolves()
    const passwdVrf = {"email": "test@example.com"}

    const response = await chai.request(app).post('/login').send(passwdVrf)
    chai.expect(response.status).to.equal(400);
    chai.expect(response.body.message).to.deep.equal('All fields must be filled');
  })

  it('Verfica se ao passar um email que não existe retorna status 401', async () => {
    sinon.stub(Users, 'findOne').resolves(undefined)
    const loginVrf = {
      "email": "test@example.com",
      "password": "senhasuperhipermegasecreta"
    }

    const response = await chai.request(app).post('/login').send(loginVrf)
    chai.expect(response.status).to.equal(401);
    chai.expect(response.body.message).to.deep.equal('Incorrect email or password');
  })

  it('Verfica se ao passar uma senha incorreta retorna o status 401', async () => {
    sinon.stub(Users, 'findOne').resolves(undefined)
    const loginVrf = {
      "email": "test@example.com",
      "password": "senhasuperhipermegasecreta"
    }

    const response = await chai.request(app).post('/login').send(loginVrf)
    chai.expect(response.status).to.equal(401);
    chai.expect(response.body.message).to.deep.equal('Incorrect email or password');
  })
})

describe('get /login/validate', () => {
  beforeEach(sinon.restore);

  it('Verifica se retorna status 401 com a mensagem Invalid token caso o token não seja valido', async () => {
    const tokenVrf = 'u9421ndm,qmnbu9isnqm019hyd9jo0snd9q2o1nc'

    const response = await chai.request(app).get('/login/validate').set({ "Authorization": tokenVrf})
    chai.expect(response.status).to.equal(401);
    chai.expect(response.body.message).to.be.equal("Token must be a valid token")
  })

})
