import Http from '../services/http'

class Api extends Http {
  getAll () {
    return this._get('https://jsonplaceholder.typicode.com/users')
  }
}

export default new Api()
