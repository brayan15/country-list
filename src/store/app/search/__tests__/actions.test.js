import { SET_SEARCH, setSearch } from '../actions'

describe('Action tests', () => {
  test('setSearch', () => {
    expect(setSearch('test')).toEqual({ type: SET_SEARCH, payload: 'test' })
  })
})
