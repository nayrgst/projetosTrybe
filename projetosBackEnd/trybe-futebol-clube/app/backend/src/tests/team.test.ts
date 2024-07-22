import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Teams from '../database/models/Teams';
import { app } from '../app'
import { teamsMocks, OMAIORDETODOS} from './Mocks/mocksTeams'
 
chai.use(chaiHttp);

describe('get /teams', () => {
  beforeEach(sinon.restore);

  it('Verifica se a requisição retorna todos os times corretamente', async () => {
    sinon.stub(Teams, "findAll").resolves(teamsMocks as Teams[]);
    const response = await chai.request(app).get('/teams')

    chai.expect(response.status).to.equal(200);
    chai.expect(response.body).to.be.deep.equal(teamsMocks);
  })
})

describe('get /teams:id', () => {
  it('Verifica se dispara o status 404 caso informe um time que não existe', async () => {
    sinon.stub(Teams, "findOne").resolves(undefined);
    const response = await chai.request(app).get('/teams/777');
  
    chai.expect(response.status).to.equal(401);
    chai.expect(response.body.message).to.be.deep.equal('invalid team or does not exist');
  })
  
})