//@flow
export const SET_SEARCH = 'SET_SEARCH'

export const setSearch = (term: string) => ({
  type: SET_SEARCH,
  payload: term
})
