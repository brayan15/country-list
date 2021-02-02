// @flow
import restClient from '../modules/rest-client'

const useFetchLanguages = () => {
  const getLanguages = async () => {
    try {
      return await restClient.getLanguages()
    } catch (error) {
      return { hasError: true }
    }
  }

  return [getLanguages]
}

export default useFetchLanguages
