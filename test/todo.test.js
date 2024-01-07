const { describe } = require('node:test');
const app = require('../app');
const request = require('supertest');

describe('Todo Routes', () => {
    describe('GET /todos', () => {
        it('should get all', (done) => {
            request(app)
                .get('/todos')
                .end((err, res) => {
                    if(err) done(err);
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toEqual(expect.any(Array));
                    done();
                });
        });
    });
    describe('POST /todos', () => {
        it('should create and code 200', (done) => {
            const body = {
                title: 'makan',
                status: 'active'
            };
            request(app)
                .post('/todos')
                .send(body)
                .end((err, res) => {
                    if(err) done(err);
                    expect(res.statusCode).toEqual(201);
                    expect(res.body).toEqual(expect.any(Object));
                    expect(res.body).toHaveProperty('id', expect.any(Number));
                    expect(res.body).toHaveProperty('title', body.title);
                    expect(res.body).toHaveProperty('status', body.status);
                    done();
                });
        });
    });
    describe('GET /todos/:id', () => {
        it('should get by id with 200 status code', (done) => {
            request(app)
                .get('/todos/1')
                .end((err, res) => {
                    if(err) done(err);
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toEqual(expect.any(Object));
                    expect(res.body).toHaveProperty('id', expect.any(Number));
                    expect(res.body).toHaveProperty('title', expect.any(String));
                    expect(res.body).toHaveProperty('status', expect.any(String));
                    done();
                });
        });
    });
    describe('DELETE /todos/:id', () => {
        it('should delete and 200 status code', (done) => {
            const body = {
                title: 'makan',
                status: 'active'
            };
            request(app)
                .put('/todos/1')
                .send(body)
                .end((err, res) => {
                    if(err) done(err);
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toEqual(expect.any(Object));
                    expect(res.body).toHaveProperty('id', expect.any(Number));
                    expect(res.body).toHaveProperty('title', body.title);
                    expect(res.body).toHaveProperty('status', body.status);
                    done();
                });
        });
    });
});
