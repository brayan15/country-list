import { getCountriesAsArray, makeGetCountry } from '../selectors'
import { mockStateData } from '../../__mocks__'

describe('Selector tests', () => {
  test('getCountriesAsArray selector', () => {
    expect(getCountriesAsArray(mockStateData)).toEqual(['colombia'])
  })

  test('getCountriesAsArray selector with search param', () => {
    expect(getCountriesAsArray({ ...mockStateData, search: { searchTerm: 'co' } })).toEqual([
      'colombia'
    ])
  })

  test('getCountriesAsArray selector with search param', () => {
    expect(getCountriesAsArray({ ...mockStateData, search: { searchTerm: 'al' } })).toEqual([])
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
