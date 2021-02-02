import {
  fetchLanguages,
  FETCH_LANGUAGES,
  fetchLanguagesError,
  FETCH_LANGUAGES_ERROR,
  fetchLanguagesLoading,
  FETCH_LANGUAGES_LOADING
} from '../actions'

describe('Languages actions tests', () => {
  test('fetchLanguages action', () => {
    const EXPECTED_ACTION = {
      type: FETCH_LANGUAGES,
      payload: { name: 'test' }
    }

    expect(fetchLanguages({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })

  test('fetchLanguagesLoading action', () => {
    const EXPECTED_ACTION = {
      type: FETCH_LANGUAGES_LOADING
    }

    expect(fetchLanguagesLoading()).toEqual(EXPECTED_ACTION)
  })

  test('fetchLanguagesError action', () => {
    const EXPECTED_ACTION = {
      type: FETCH_LANGUAGES_ERROR
    }

    expect(fetchLanguagesError()).toEqual(EXPECTED_ACTION)
  })
})
