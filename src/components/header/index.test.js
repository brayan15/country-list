import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

describe('Header tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render Header component', () => {
    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')
    const branding = wrapper
      .find('div')
      .first()
      .props()
    const search = wrapper
      .find('div')
      .children()
      .last()
      .props()

    expect(header.exists()).toBe(true)
    expect(branding.className).toBe('header__branding')
    expect(search.className).toBe('header__search')
  })
})
