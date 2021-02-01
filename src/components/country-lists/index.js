// @flow
import React from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'
import { getCountriesAsArray } from '../../store/app/countries/selectors'
import CountryItem from '../country-item'

const CountryLists = () => {
  const countries: Array<string> = useSelector(getCountriesAsArray)

  return (
    <div className='country-lists w-100'>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4
        }}
        pagination={{
          defaultPageSize: 30,
          pageSizeOptions: [30, 50, 100]
        }}
        dataSource={countries}
        className='country-lists__items-wrapper'
        renderItem={item => <CountryItem country={item} />}
      />
    </div>
  )
}

export default CountryLists
