import search from '../reducer'
import { SET_SEARCH } from '../actions'
import { mockInitialState } from '../../__mocks__'

describe('Search reducer tests', () => {
  test('SET_SEARCH case', () => {
    const DISPATCHED_ACTION = { type: SET_SEARCH, payload: 'test' }

    expect(search(mockInitialState.search, DISPATCHED_ACTION)).toEqual({
      filterTerm: '',
      searchTerm: 'test'
    })
  })

  test('EMPTY case', () => {
    expect(search(undefined, '')).toEqual(mockInitialState.search)
  })
})
