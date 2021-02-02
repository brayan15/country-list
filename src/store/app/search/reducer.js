//@flow
import type { SearchStateT } from './types'
import type { ActionT } from '../types'
import { SET_FILTER, SET_SEARCH } from './actions'

const initialState = {
  searchTerm: '',
  filterTerm: ''
}

const reducer = (state: SearchStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case SET_SEARCH:
      return { ...state, searchTerm: payload }
    case SET_FILTER:
      return { ...state, filterTerm: payload }
    default:
      return state
  }
}

export default reducer
