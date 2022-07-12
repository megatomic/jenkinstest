const request = require('supertest');
const app = require('./index');

describe('GET/', ()=> {
 it('hello world', ()=> {
   request(app).get('/').expect('hello world')
 })
})
