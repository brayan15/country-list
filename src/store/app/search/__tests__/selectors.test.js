import { getSearchTerm } from '../selectors'
import { mockStateData } from '../../__mocks__'

describe('Selector tests', () => {
  test('getSearchTerm selector', () => {
    expect(getSearchTerm(mockStateData)).toEqual('')
  })
})
