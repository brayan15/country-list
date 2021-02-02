import React from 'react'
import { shallow } from 'enzyme'
import CountryLists from './index'
import { useSelector } from 'react-redux'
import { mockStateData } from '../../store/app/__mocks__'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

describe('CountryLists tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render CountryLists component', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const wrapper = shallow(<CountryLists />)
    const component = wrapper.find('.country-lists')
    const list = wrapper.find('.country-lists__items-wrapper')

    list.props().renderItem()

    expect(component.exists()).toBe(true)
    expect(list.prop('dataSource')).toEqual(['colombia'])
  })
})
