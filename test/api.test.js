const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp);
const expect = chai.expect

describe('Currency Conversion API', () => {
  it('should return converted amount in correct format', (done) => {
    chai
      .request(app)
      .get('/exchange?source=USD&target=JPY&amount=$1,525')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('msg').equal('success')
        expect(res.body).to.have.property('amount').equal('$170496.53')
        done()
      })
  })

  it('should handle invalid currency or rate', (done) => {
    chai
      .request(app)
      .get('/exchange?source=USD&target=INVALID&amount=$1,525')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('msg').equal('Invalid currency or exchange rate')
        done()
      })
  })

  it('should handle missing query parameters', (done) => {
    chai
      .request(app)
      .get('/exchange')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('msg').equal('Please provide source, target and amount')
        done()
      })
  })
})
