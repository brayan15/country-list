import {
  FETCH_COUNTRIES,
  fetchCountries,
  fetchCountriesError,
  FETCH_COUNTRIES_ERROR,
  fetchCountriesLoading,
  FETCH_COUNTRIES_LOADING
} from '../actions'

describe('Countries actions tests', () => {
  test('fetchCountries action', () => {
    const EXPECTED_ACTION = { type: FETCH_COUNTRIES, payload: { name: 'test' } }

    expect(fetchCountries({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })

  test('fetchCountriesLoading action', () => {
    const EXPECTED_ACTION = { type: FETCH_COUNTRIES_LOADING }

    expect(fetchCountriesLoading()).toEqual(EXPECTED_ACTION)
  })

  test('fetchCountriesError action', () => {
    const EXPECTED_ACTION = { type: FETCH_COUNTRIES_ERROR }

    expect(fetchCountriesError()).toEqual(EXPECTED_ACTION)
  })
})
