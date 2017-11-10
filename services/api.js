import Http from './http'

class Api extends Http {
  getUsers () {
    return this._get('https://jsonplaceholder.typicode.com/users')
  }
}

export default new Api()
