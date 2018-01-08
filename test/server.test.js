process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const app = server.app;
const should = chai.should();

chai.use(chaiHTTP);

describe('Smoke Test', () => {
    it('Did it blow up?', () => {
        chai.request(app).get('/api/test').end((error, response) => {
            res.should.have.status(200);
            res.body.ok.should.be.true;
        });
    });
});