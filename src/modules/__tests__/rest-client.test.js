import restClient from '../rest-client'
import { mockCountries } from '../../store/app/__mocks__'

jest.mock('../rest-client')

describe('Service tests', () => {
  const mockCountry = {
    Country: [
      {
        ...mockCountries.countries.countries.colombia
      }
    ]
  }

  const mockError = {
    error: {
      status: 400
    }
  }

  test('restClient should respond ok', () => {
    restClient.getCountries.mockImplementation(() => Promise.resolve(mockCountry))
    restClient.getCountries().then(response => {
      expect(response).toEqual(mockCountry)
    })
  })

  test('restClient should fail', () => {
    restClient.getCountries.mockImplementation(() => Promise.reject(mockError))
    restClient.getCountries().catch(error => {
      expect(error).toEqual(mockError)
    })
  })
})
