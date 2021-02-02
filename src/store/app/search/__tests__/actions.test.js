import { SET_SEARCH, setSearch } from '../actions'

describe('Search action test', () => {
  test('setSearch action', () => {
    expect(setSearch('test')).toEqual({ type: SET_SEARCH, payload: 'test' })
  })
})
