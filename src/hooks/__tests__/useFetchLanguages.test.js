import { renderHook } from '@testing-library/react-hooks'
import restClient from '../../modules/rest-client'
import useFetchLanguages from '../useFetchLanguages'
import { mockStateData } from '../../store/app/__mocks__'

jest.mock('../../modules/rest-client')

describe('useFetchLanguages tests', () => {
  test('service should call data', () => {
    restClient.getLanguages.mockImplementation(() =>
      Promise.resolve({ Language: { ...mockStateData.languages.languages.spanish } })
    )
    const { result } = renderHook(() => useFetchLanguages())
    const [getLanguages] = result.current

    getLanguages().then(response => {
      expect(response).toEqual({ Language: { ...mockStateData.languages.languages.spanish } })
    })
  })

  test('service should return error', () => {
    restClient.getLanguages.mockImplementation(() => Promise.reject({}))
    const { result } = renderHook(() => useFetchLanguages())
    const [getLanguages] = result.current

    getLanguages().then(response => {
      expect(response).toEqual({ hasError: true })
    })
  })
})
