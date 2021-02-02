import languages from '../reducer'
import { mockInitialState, mockStateData } from '../../__mocks__'
import { FETCH_LANGUAGES, FETCH_LANGUAGES_ERROR, FETCH_LANGUAGES_LOADING } from '../actions'

describe('Languages reducer tests', () => {
  test('FETCH_LANGUAGES case', () => {
    const DISPATCHED_ACTION = {
      type: FETCH_LANGUAGES,
      payload: [{ ...mockStateData.languages.languages.spanish }]
    }

    expect(languages(mockInitialState.languages, DISPATCHED_ACTION)).toEqual(
      mockStateData.languages
    )
  })

  test('FETCH_LANGUAGES_LOADING case', () => {
    const EXPECTED_STATE = { isLoading: true, status: 'LOADING', languages: {} }
    const DISPATCHED_ACTION = {
      type: FETCH_LANGUAGES_LOADING
    }

    expect(languages(mockInitialState.languages, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('FETCH_LANGUAGES_LOADING case', () => {
    const EXPECTED_STATE = { isLoading: false, status: 'ERROR', languages: {} }
    const DISPATCHED_ACTION = {
      type: FETCH_LANGUAGES_ERROR
    }

    expect(languages(mockInitialState.languages, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('EMPTY case', () => {
    expect(languages(undefined, {})).toEqual(mockInitialState.languages)
  })
})
