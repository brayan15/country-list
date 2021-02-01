import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_LOADING,
  fetchCountries,
  fetchCountriesError,
  fetchCountriesLoading
} from '../actions'

describe('Action tests', () => {
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
