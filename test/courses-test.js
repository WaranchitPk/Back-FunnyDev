const chai = require('chai');
const expect = require('chai').expect;
const supertest = require('supertest');
const host = 'http://localhost:8888';
const server = supertest.agent("http://localhost:8888");
chai.use(require('chai-http'));

describe('GET /api/courses',() =>{
    it('API /GET', done => {
        chai.request('http://localhost:8888')
            .get('/api/courses/')
            // .send({ password: '123', confirmPassword: '123' })
            .end( (err, res) =>{
                console.log(res.status);
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(Object.keys(res.body)).to.have.lengthOf(1);
                expect(res).to.be.json;
                done();
            });
    });
});

    // describe('API enpoint /api/course', function () {
    //     it('should return all msg', function () {
    //         chai.request('http://localhost:8888')
    //             .get('/ap')
    //             .then(function (res) {
    //                 expect(res).to.have.status(404);
    //                 expect(res).to.be.a()
    //             })
    //     });
    // })
