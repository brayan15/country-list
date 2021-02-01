import React from 'react'
import { shallow } from 'enzyme'
import CountryItem from './index'
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

  test('Should render CountryItem component', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const wrapper = shallow(<CountryItem country='colombia' />)

    const component = wrapper.find('.country-lists__item')
    const card = wrapper.find('.country-lists__item').children()

    expect(component.exists()).toBe(true)
    expect(card.prop('title')).toEqual('Colombia, CO 🇨🇴')
  })
})
