// @flow
import type { ActionT } from '../types'
import { FETCH_COUNTRIES, FETCH_COUNTRIES_ERROR, FETCH_COUNTRIES_LOADING } from './actions'
import type { CountriesStateT } from './types'
import normalizeCountries from './helpers'

const initialState = {
  countries: {},
  isLoading: false,
  status: 'NOT_REQUESTED'
}

const reducer = (state: CountriesStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_COUNTRIES:
      return { ...normalizeCountries(state, payload), isLoading: false, status: 'LOADED' }
    case FETCH_COUNTRIES_LOADING:
      return { ...state, isLoading: true, status: 'LOADING' }
    case FETCH_COUNTRIES_ERROR:
      return { ...state, isLoading: false, status: 'ERROR' }
    default:
      return state
  }
}

export default reducer
