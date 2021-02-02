// @flow
import React from 'react'
import { List, Select } from 'antd'
import { useSelector } from 'react-redux'
import { getCountriesAsArray } from '../../store/app/countries/selectors'
import CountryItem from '../country-item'
import { getLanguagesAsArray } from '../../store/app/languages/selectors'

const { Option } = Select

const CountryLists = () => {
  const countries: Array<string> = useSelector(getCountriesAsArray)
  const languages: Array<string> = useSelector(getLanguagesAsArray)

  const onChangeSelect = (term: string) => {}

  return (
    <div className='country-lists w-100'>
      {languages.length && countries.length ? (
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
