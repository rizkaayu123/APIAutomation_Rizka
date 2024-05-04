const supertest = require('supertest');
const { expect } = require('chai');

describe('POST User Profile', () =>{
    it('Succes POST User Profile', async() => {
        const response = await supertest('https://api.restful-api.dev').post('/objects').send({
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
        })
        .set('Content-Type','application/json')
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })
})