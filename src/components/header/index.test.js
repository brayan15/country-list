import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { useDispatch } from 'react-redux'
import { SET_SEARCH } from '../../store/app/search/actions'

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

  test('Should render Header component with search param', () => {
    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)

    const wrapper = shallow(<Header />)

    const search = wrapper
      .find('div')
      .children()
      .last()
      .props()

    search.onSearch('co')

    expect(mockedDispatch).toHaveBeenCalledWith({ payload: 'co', type: SET_SEARCH })
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
  })
})
