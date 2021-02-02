import { mockStateData } from '../../__mocks__'
import { getCountriesAsArray, makeGetCountry } from '../selectors'

describe('Countries selectors tests', () => {
  test('getCountriesAsArray selector', () => {
    expect(getCountriesAsArray(mockStateData)).toEqual(['colombia'])
  })

  test('getCountriesAsArray selector with searchTerm and filterTerm param', () => {
    expect(
      getCountriesAsArray({ ...mockStateData, search: { searchTerm: 'co', filterTerm: 'spanish' } })
    ).toEqual(['colombia'])
  })

  test('getCountriesAsArray selector with searchTerm and without filterTerm param', () => {
    expect(
      getCountriesAsArray({ ...mockStateData, search: { searchTerm: 'al', filterTerm: '' } })
    ).toEqual([])
  })

  test('getCountriesAsArray selector with filterTerm and without searchTerm param', () => {
    expect(
        getCountriesAsArray({ ...mockStateData, search: { searchTerm: '', filterTerm: 'english' } })
    ).toEqual([])
  })

  test('makeGetCountry selector', () => {
    const getCountry = makeGetCountry()

    expect(getCountry(mockStateData, 'colombia')).toEqual(
      mockStateData.countries.countries.colombia
    )
  })

  test('makeGetCountry selector empty country', () => {
    const getCountry = makeGetCountry()

    expect(getCountry(mockStateData, 'mexico')).toEqual({})
  })
})
