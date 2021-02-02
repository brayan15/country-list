import React from 'react'
import { shallow } from 'enzyme'
import CountryLists from './index'
import { useDispatch, useSelector } from 'react-redux'
import { mockStateData } from '../../store/app/__mocks__'
import { SET_FILTER } from '../../store/app/search/actions'

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

  test('Should call dispatch', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)
    const wrapper = shallow(<CountryLists />)
    const component = wrapper.find('.country-lists')
    const list = wrapper.find('.country-lists__items-wrapper')
    const filter = wrapper.find('.country-lists__filter-language')

    list.props().renderItem()
    filter.props().filterOption('spanish', {
      key: 'northern ndebele',
      value: 'northern ndebele',
      children: 'northern ndebele',
      className: 'country-lists__filter-option'
    })
    filter.props().filterSort(
      {
        key: 'shona',
        value: 'shona',
        children: 'shona',
        className: 'country-lists__filter-option'
      },
      {
        key: 'serbian',
        value: 'serbian',
        children: 'serbian',
        className: 'country-lists__filter-option'
      }
    )
    filter.props().onChange('')

    expect(component.exists()).toBe(true)
    expect(list.prop('dataSource')).toEqual(['colombia'])
    expect(mockedDispatch).toHaveBeenCalledWith({ payload: '', type: SET_FILTER })
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
  })

  test('Should not render filter component', () => {
    useSelector.mockImplementation(selector =>
      selector({
        ...mockStateData,
        languages: { isLoading: false, status: 'LOADED', languages: {} }
      })
    )
    const wrapper = shallow(<CountryLists />)
    const component = wrapper.find('.country-lists')
    const list = wrapper.find('.country-lists__items-wrapper')
    const filter = wrapper.find('.country-lists__filter-language')

    expect(component.exists()).toBe(true)
    expect(filter.exists()).toBe(false)
    expect(list.prop('dataSource')).toEqual(['colombia'])
  })
})
