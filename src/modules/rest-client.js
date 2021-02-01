import axios from 'axios'
import countriestQueries from '../queries'

class RestClient {
  constructor() {
    this._authApi = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  /**
   * Get countries from api
   * @return {Promise}
   */

  getCountries = () => {
    return this._authApi
      .post('', {
        query: countriestQueries.queries.getCountries
      })
      .then(({ data }) => data.data)
  }
}

const restClient = new RestClient()

export default restClient
