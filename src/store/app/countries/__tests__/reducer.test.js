import countries from '../reducer'
import { mockInitialState, mockStateData } from '../../__mocks__'
import { FETCH_COUNTRIES, FETCH_COUNTRIES_ERROR, FETCH_COUNTRIES_LOADING } from '../actions'

describe('Countries reducer tests', () => {
  test('FETCH_COUNTRIES case', () => {
    const DISPATCHED_ACTION = {
      type: FETCH_COUNTRIES,
      payload: [{ ...mockStateData.countries.countries.colombia }]
    }

    expect(countries(mockInitialState.countries, DISPATCHED_ACTION)).toEqual(
      mockStateData.countries
    )
  })

  test('FETCH_COUNTRIES_LOADING case', () => {
    const EXPECTED_STATE = { isLoading: true, status: 'LOADING', countries: {} }

    const DISPATCHED_ACTION = {
      type: FETCH_COUNTRIES_LOADING
    }

    expect(countries(mockInitialState.countries, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('FETCH_COUNTRIES_ERROR case', () => {
    const DISPATCHED_ACTION = {
      type: FETCH_COUNTRIES_ERROR
    }

    expect(countries(mockInitialState.countries, DISPATCHED_ACTION)).toEqual({
      ...mockInitialState.countries,
      status: 'ERROR'
    })
  })

  test('EMPTY case', () => {
    expect(countries(undefined, {})).toEqual(mockInitialState.countries)
  })
})
