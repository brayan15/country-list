import { getCountriesAsArray, makeGetCountry } from '../selectors'

const mockState = {
  countries: {
    isLoading: false,
    status: 'LOADED',
    countries: {
      colombia: {
        name: 'Colombia',
        alpha2Code: 'CO',
        population: 48759958,
        capital: 'Bogotá',
        flag: {
          emoji: '🇨🇴'
        }
      }
    }
  }
}

describe('Selector tests', () => {
  test('getCountriesAsArray selector', () => {
    expect(getCountriesAsArray(mockState)).toEqual(['colombia'])
  })

  test('makeGetCountry selector', () => {
    const getCountry = makeGetCountry()

    expect(getCountry(mockState, 'colombia')).toEqual(mockState.countries.countries.colombia)
  })

  test('makeGetCountry selector empty country', () => {
    const getCountry = makeGetCountry()

    expect(getCountry(mockState, 'mexico')).toEqual({})
  })
})
