import fetch from 'isomorphic-fetch'

import config from '../config'

export default class Http {
  host = config.host

  /**
   * http request wrapper
   *
   * @param {string} method
   * @param {string} url
   * @param {Object} body
   * @returns {Promise<any>} json response
   * @memberof Http
   */
  async _request (method, url, body) {
    // mock response for tests
    if (process.env.NODE_ENV === 'test') {
      return { success: true, fake: true }
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body)
      })

      if (response.status >= 200 && response.status < 300) {
        return await response.json()
      } else {
        const error = new Error(response.statusText)
        throw error
      }
    } catch (error) {
      console.error(error)

      throw error
    }
  }

  /**
   * GET request
   *
   * @param {string} url
   * @returns {Promise<any>} json response
   * @memberof Http
   */
  get (url) {
    return this._request('GET', url)
  }

  /**
   * POST request
   *
   * @param {string} url
   * @param {Object} body
   * @returns {Promise<any>} json response
   * @memberof Http
   */
  post (url, body) {
    return this._request('POST', url, body)
  }

  /**
   * PUT request
   *
   * @param {string} url
   * @param {Object} body
   * @returns {Promise<any>} json response
   * @memberof Http
   */
  put (url, body) {
    return this._request('PUT', url, body)
  }

  /**
   * convert object to params string
   *
   * @param {object} o
   * @returns {string}
   * @memberof Http
   */
  toParams (o) {
    return '?' + Object.keys(o).map(k => `${k}=${o[k]}`).join('&')
  }
}
