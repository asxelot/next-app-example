import Http from '../services/http'

class Api extends Http {
  getAll () {
    return this.get(`${this.host}/users`)
  }
}

export default new Api()
