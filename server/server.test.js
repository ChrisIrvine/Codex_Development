process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('./server');
const app = server.app;
const should = chai.should();

chai.use(chaiHTTP);