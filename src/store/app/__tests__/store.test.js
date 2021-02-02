import store from '../index'
import { mockInitialState } from '../__mocks__'

describe('Store tests', () => {
  it('Should have call store and assigned a default state', () => {
    expect(store).toBeInstanceOf(Object)
    expect(store.getState()).toEqual(mockInitialState)
  })
})
