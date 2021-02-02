// @flow
import React from 'react'
import { useDispatch } from 'react-redux'
import { Layout, Row, Col, Input } from 'antd'
import useFetchCountries from '../../hooks/useFetchCountries'
import {
  fetchCountries,
  fetchCountriesError,
  fetchCountriesLoading
} from '../../store/app/countries/actions'
import { setSearch } from '../../store/app/search/actions'
import useFetchCurrencies from '../../hooks/useFetchLanguages'
import { fetchLanguages, fetchLanguagesError } from '../../store/app/languages/actions'

const Header = () => {
  const dispatch = useDispatch()
  const [getCountries] = useFetchCountries()
  const [getLanguages] = useFetchCurrencies()
  const onSearch = (term: string) => {
    dispatch(setSearch(term))
  }

  React.useEffect(() => {
    dispatch(fetchCountriesLoading())

    getCountries().then(result => {
      if (result.hasError) {
        return dispatch(fetchCountriesError())
      }

      return dispatch(fetchCountries(result.Country))
    })

    getLanguages().then(result => {
      if (result.hasError) {
        return dispatch(fetchLanguagesError())
      }

      return dispatch(fetchLanguages(result.Language))
    })
  }, [dispatch]) //eslint-disable-line

  return (
    <Layout.Header className='header'>
      <Row className='w-100'>
        <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }} className='header__container'>
          <div className='header__branding'>
            <a href='/' className='header__branding-link'>
              Country Lists
            </a>
          </div>
          <div className='header__search-wrapper'>
            <Input.Search
              allowClear
              enterButton
              onSearch={onSearch}
              placeholder='Search country'
              className='header__search'
            />
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
