import { renderHook } from '@testing-library/react-hooks'
import restClient from '../../modules/rest-client'
import useFetchCountries from '../useFetchCountries'
import { mockStateData } from '../../store/app/__mocks__'

jest.mock('../../modules/rest-client')

describe('useFetchCountries test', () => {
  test('service should call data', () => {
    restClient.getCountries.mockImplementation(() =>
      Promise.resolve({ Country: { ...mockStateData.countries.countries.colombia } })
    )
    const { result } = renderHook(() => useFetchCountries())
    const [getCountries] = result.current

    getCountries().then(response => {
      expect(response).toEqual({ Country: { ...mockStateData.countries.countries.colombia } })
    })
  })

  test('service should return error', () => {
    restClient.getCountries.mockImplementation(() => Promise.reject({}))
    const { result } = renderHook(() => useFetchCountries())
    const [getCountries] = result.current

    getCountries().then(response => {
      expect(response).toEqual({ hasError: true })
    })
  })
})
