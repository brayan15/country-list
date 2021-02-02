import { getSearchTerm } from '../selectors'
import { mockStateData } from '../../__mocks__'

describe('Search selector test', () => {
  test('getSearchTerm selector', () => {
    expect(getSearchTerm(mockStateData)).toEqual('')
  })
})
