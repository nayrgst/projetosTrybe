import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
import { mocksMatch } from './Mocks/mocksMatches'
import Matches from '../database/models/Matches';
import TeamServices from '../services/teamServices';

chai.use(chaiHttp);

describe('get /matches', () => {
  beforeEach(sinon.restore);

  it('Verfica se a requisição retorna todos os matches corretamente', async () => {
    sinon.stub(Matches, 'findAll').resolves(mocksMatch as any);
    const response = await chai.request(app).get('/matches')
    chai.expect(response.status).to.equal(200)
    chai.expect(response.body).to.be.deep.equal(mocksMatch)
  })
})

describe('post /matches', () => {
  beforeEach(sinon.restore);
  
  it('Verfica se a requisição dispara o status 401 caso token não exista ou esteja errado', async () => {
    const tokenVrf = 'u9421ndm,qmnbu9isnqm019hyd9jo0snd9q2o1nc'
    const response = await chai.request(app).post('/matches').set({ "Authorization": tokenVrf})

    chai.expect(response.status).to.equal(401)
    chai.expect(response.body.message).to.be.equal('Token must be a valid token')
  })


})

describe('patch /matches', () => {
  beforeEach(sinon.restore);

  it('Verifica se ao fazer a requisição retorna o status 200 com a mensagem correta', async () => {
    const response = await chai.request(app).patch('/matches/:id/finish')
    
    chai.expect(response.status).to.equal(200)
    chai.expect(response.body.message).to.be.equal('Finished')
  })

  it('Verifica se ao fazer a requisição de atualização retorna o status 200 com a messagme correta', async () => {
    const data = {
      "homeTeamGoals": 3,
      "awayTeamGoals": 1
    }
    const response = await chai.request(app).patch('/matches/:id').send(data);

    chai.expect(response.status).to.equal(200);
    chai.expect(response.body.message).to.be.equal('updated');
  })
})