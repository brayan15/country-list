import {SET_FILTER, SET_SEARCH, setFilter, setSearch} from '../actions'

describe('Search action test', () => {
  test('setSearch action', () => {
    expect(setSearch('test')).toEqual({ type: SET_SEARCH, payload: 'test' })
  })

  test('setFilter action', () => {
    expect(setFilter('test')).toEqual({ type: SET_FILTER, payload: 'test' })
  })
})
