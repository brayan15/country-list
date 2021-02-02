import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { useDispatch } from 'react-redux'
import { SET_SEARCH } from '../../store/app/search/actions'
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_LOADING
} from '../../store/app/countries/actions'
import restClient from '../../modules/rest-client'
import { renderHook } from '@testing-library/react-hooks'
import useFetchCountries from '../../hooks/useFetchCountries'
import useFetchLanguages from '../../hooks/useFetchLanguages'
import { FETCH_LANGUAGES, FETCH_LANGUAGES_ERROR } from '../../store/app/languages/actions'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

jest.mock('../../modules/rest-client')

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

describe('useEffect tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Dispatch FETCH_COUNTRIES', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(fn => fn())

    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)

    restClient.getCountries.mockImplementation(() => Promise.resolve({ Country: 'test' }))
    const { result } = renderHook(() => useFetchCountries())
    const [getCountries] = result.current

    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')

    getCountries().then(response => {
      expect(response).toEqual({ Country: 'test' })
      expect(mockedDispatch).toHaveBeenCalledTimes(2)
      expect(mockedDispatch).toHaveBeenCalledWith({
        payload: 'test',
        type: FETCH_COUNTRIES
      })
    })

    expect(header.exists()).toBe(true)
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
    expect(mockedDispatch).toHaveBeenCalledWith({ type: FETCH_COUNTRIES_LOADING })
  })

  test('Dispatch FETCH_COUNTRIES_ERROR', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(fn => fn())

    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)

    restClient.getCountries.mockImplementation(() => Promise.reject())

    const { result } = renderHook(() => useFetchCountries())
    const [getCountries] = result.current

    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')

    getCountries().then(response => {
      expect(response).toEqual({ hasError: true })
      expect(mockedDispatch).toHaveBeenCalledTimes(2)
      expect(mockedDispatch).toHaveBeenCalledWith({
        type: FETCH_COUNTRIES_ERROR
      })
    })

    expect(header.exists()).toBe(true)
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
    expect(mockedDispatch).toHaveBeenCalledWith({ type: FETCH_COUNTRIES_LOADING })
  })

  test('Dispatch FETCH_LANGUAGES', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(fn => fn())

    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)

    restClient.getLanguages.mockImplementation(() => Promise.resolve({ Language: 'test' }))
    const { result } = renderHook(() => useFetchLanguages())
    const [getLanguages] = result.current

    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')

    getLanguages().then(response => {
      expect(response).toEqual({ Language: 'test' })
      expect(mockedDispatch).toHaveBeenCalledTimes(3)
      expect(mockedDispatch).toHaveBeenCalledWith({
        payload: 'test',
        type: FETCH_LANGUAGES
      })
    })

    expect(header.exists()).toBe(true)
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
    expect(mockedDispatch).toHaveBeenCalledWith({ type: FETCH_COUNTRIES_LOADING })
  })

  test('Dispatch FETCH_LANGUAGES_ERROR', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(fn => fn())

    const mockedDispatch = jest.fn()

    useDispatch.mockReturnValue(mockedDispatch)

    restClient.getLanguages.mockImplementation(() => Promise.reject())

    const { result } = renderHook(() => useFetchLanguages())
    const [getLanguages] = result.current

    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')

    getLanguages().then(response => {
      expect(response).toEqual({ hasError: true })
      expect(mockedDispatch).toHaveBeenCalledTimes(3)
      expect(mockedDispatch).toHaveBeenCalledWith({
        type: FETCH_LANGUAGES_ERROR
      })
    })

    expect(header.exists()).toBe(true)
    expect(mockedDispatch).toHaveBeenCalledTimes(1)
    expect(mockedDispatch).toHaveBeenCalledWith({ type: FETCH_COUNTRIES_LOADING })
  })
})
