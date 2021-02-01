import React from 'react'
import { shallow } from 'enzyme'
import CountryLists from './index'

describe('CountryLists tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CountryLists />)
  })

  test('Should render CountryLists component', () => {
    const component = wrapper.find('.country-lists')
    
    expect(component.exists()).toBe(true)
  })
})
