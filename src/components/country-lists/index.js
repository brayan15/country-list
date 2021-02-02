// @flow
import React from 'react'
import { List, Select, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import CountryItem from '../country-item'
import { setFilter } from '../../store/app/search/actions'
import { getLanguagesAsArray } from '../../store/app/languages/selectors'
import { areCountriesLoading, getCountriesAsArray } from '../../store/app/countries/selectors'

const { Option } = Select

const CountryLists = () => {
  const countries: Array<string> = useSelector(getCountriesAsArray)
  const languages: Array<string> = useSelector(getLanguagesAsArray)
  const isLoading: boolean = useSelector(areCountriesLoading)
  const dispatch = useDispatch()

  const onChangeSelect = (term: string) => dispatch(setFilter(term || ''))

  return (
    <div className='country-lists w-100'>
      {languages.length ? (
        <>
          <p>Filter by: </p>
          <Select
            showSearch
            allowClear
            onChange={onChangeSelect}
            style={{ width: 200 }}
            placeholder='Filter by Language'
            optionFilterProp='children'
            className='country-lists__filter-language'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {languages.map((language: string) => (
              <Option value={language} key={language} className='country-lists__filter-option'>
                {language}
              </Option>
            ))}
          </Select>
        </>
      ) : null}
      {!isLoading ? (
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
      ) : (
        <Spin size='large' className='country-lists__loader' />
      )}
    </div>
  )
}

export default CountryLists
