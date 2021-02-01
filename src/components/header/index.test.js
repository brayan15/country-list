import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  test('Should render Header component', () => {
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
