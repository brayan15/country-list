//@flow
export const SET_SEARCH = 'SET_SEARCH'
export const SET_FILTER = 'SET_FILTER'

export const setSearch = (term: string) => ({
  type: SET_SEARCH,
  payload: term
})

export const setFilter = (term: string) => ({
  type: SET_FILTER,
  payload: term
})
