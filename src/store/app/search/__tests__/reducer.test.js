import search from '../reducer'
import { SET_FILTER, SET_SEARCH } from '../actions'
import { mockInitialState } from '../../__mocks__'

describe('Search reducer tests', () => {
  test('SET_SEARCH case', () => {
    const DISPATCHED_ACTION = { type: SET_SEARCH, payload: 'test' }

    expect(search(mockInitialState.search, DISPATCHED_ACTION)).toEqual({
      filterTerm: '',
      searchTerm: 'test'
    })
  })

  test('SET_FILTER case', () => {
    const DISPATCHED_ACTION = { type: SET_FILTER, payload: 'test' }

    expect(search(mockInitialState.search, DISPATCHED_ACTION)).toEqual({
      filterTerm: 'test',
      searchTerm: ''
    })
  })

  test('EMPTY case', () => {
    expect(search(undefined, '')).toEqual(mockInitialState.search)
  })
})
