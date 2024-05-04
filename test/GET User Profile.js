const supertest = require('supertest');
const { expect } = require('chai');

describe('GET User Profile', () =>{
    it('Succes GET User Profile', async() => {
        const response = await supertest('https://api.restful-api.dev').get('/objects/7')
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })
})