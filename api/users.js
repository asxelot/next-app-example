import Http from '../services/http'

class Api extends Http {
  getAll () {
    return this._get('http://localhost:3000/users')
  }
}

export default new Api()
