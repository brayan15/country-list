//@flow
import type { SearchStateT } from './types'
import type { ActionT } from '../types'
import { SET_SEARCH } from './actions'

const initialState = {
  searchTerm: ''
}

const reducer = (state: SearchStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case SET_SEARCH:
      return { searchTerm: payload }
    default:
      return state
  }
}

export default reducer
