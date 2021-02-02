import React from 'react'
import { shallow } from 'enzyme'
import CountryItem from './index'
import { useSelector } from 'react-redux'
import { mockCountriesWithEmptyData, mockStateData } from '../../store/app/__mocks__'

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

  test('Should render Modal component', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const wrapper = shallow(<CountryItem country='colombia' />)

    const component = wrapper.find('.country-lists__item')
    const button = wrapper.find('.country-lists__button')

    button.props().onClick()

    wrapper.update()

    const modal = wrapper.find('.country-lists__modal')

    expect(component.exists()).toBe(true)
    expect(modal.exists()).toBe(true)
  })

  test('Should close Modal component when user clicks onCancel', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const wrapper = shallow(<CountryItem country='colombia' />)

    const component = wrapper.find('.country-lists__item')
    const button = wrapper.find('.country-lists__button')

    button.props().onClick()

    wrapper.update()

    const modal = wrapper.find('.country-lists__modal')

    modal.props().onCancel()

    wrapper.update()

    // after modal is closed we ned update wrapper and search it again

    const modalClosed = wrapper.find('.country-lists__modal')

    expect(component.exists()).toBe(true)
    expect(modal.exists()).toBe(true)
    expect(modalClosed.exists()).toBe(false)
  })

  test('Should close Modal component when user clicks onOk', () => {
    useSelector.mockImplementation(selector => selector(mockStateData))
    const wrapper = shallow(<CountryItem country='colombia' />)

    const component = wrapper.find('.country-lists__item')
    const button = wrapper.find('.country-lists__button')

    button.props().onClick()

    wrapper.update()

    const modal = wrapper.find('.country-lists__modal')

    modal.props().onOk()

    wrapper.update()

    // after modal is closed we ned update wrapper and search it again

    const modalClosed = wrapper.find('.country-lists__modal')

    expect(component.exists()).toBe(true)
    expect(modal.exists()).toBe(true)
    expect(modalClosed.exists()).toBe(false)
  })

  test('Should render CountryItem component with empty data', () => {
    useSelector.mockImplementation(selector => selector(mockCountriesWithEmptyData))
    const wrapper = shallow(<CountryItem country='colombia' />)

    const component = wrapper.find('.country-lists__item')
    const button = wrapper.find('.country-lists__button')

    button.props().onClick()

    wrapper.update()

    const modal = wrapper.find('.country-lists__modal')

    expect(component.exists()).toBe(true)
    expect(modal.exists()).toBe(true)
  })
})
