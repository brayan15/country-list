// @flow
import React from 'react'
import { Card, List } from 'antd'
import { useSelector } from 'react-redux'
import type { CountryT } from '../../store/app/countries/types'
import { makeGetCountry } from '../../store/app/countries/selectors'

type PropsT = {
  country: string
}

const CountryItem = ({ country }: PropsT) => {
  const getCountry = makeGetCountry()
  const countryData: CountryT = useSelector(state => getCountry(state, country))

  return (
    <List.Item className='country-lists__item'>
      <Card title={`${countryData.name}, ${countryData.alpha2Code} ${countryData.flag.emoji}`}>
        <p>Name: {countryData.name}</p>
        <p>Code: {countryData.alpha2Code}</p>
        <p>Capital: {countryData.capital}</p>
        <p>Population: {countryData.population}</p>
        <p>Show More</p>
      </Card>
    </List.Item>
  )
}

export default CountryItem
