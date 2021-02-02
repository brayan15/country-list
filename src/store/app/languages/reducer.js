import type { ActionT } from '../types'
import normalizeLanguages from './helpers'
import type { LanguagesStateT } from './types'
import { FETCH_LANGUAGES, FETCH_LANGUAGES_ERROR, FETCH_LANGUAGES_LOADING } from './actions'

const initialState = {
  isLoading: false,
  status: 'NOT_REQUESTED',
  languages: []
}

const reducer = (state: LanguagesStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_LANGUAGES:
      return { ...normalizeLanguages(state, payload), isLoading: false, status: 'LOADED' }
    case FETCH_LANGUAGES_LOADING:
      return { ...state, isLoading: true, status: 'LOADING' }
    case FETCH_LANGUAGES_ERROR:
      return { ...state, isLoading: false, status: 'ERROR' }
    default:
      return state
  }
}

export default reducer
