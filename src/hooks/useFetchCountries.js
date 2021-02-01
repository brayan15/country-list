// @flow
import restClient from '../modules/rest-client'

const useFetchCountries = () => {
  const getCountries = async () => {
    try {
      return await restClient.getCountries()
    } catch (error) {
      return { hasError: true }
    }
  }

  return [getCountries]
}

export default useFetchCountries
