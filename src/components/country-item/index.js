// @flow
import React from 'react'
import { Card, List, Button, Modal } from 'antd'
import { useSelector } from 'react-redux'
import type { CallingCodeT, CountryT, CurrencyT, LanguagesT } from '../../store/app/countries/types'
import { makeGetCountry } from '../../store/app/countries/selectors'

type PropsT = {
  country: string
}

const CountryItem = ({ country }: PropsT) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const getCountry = makeGetCountry()
  const countryData: CountryT = useSelector(state => getCountry(state, country))

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <List.Item className='country-lists__item'>
        <Card title={`${countryData.name}, ${countryData.alpha2Code} ${countryData.flag.emoji}`}>
          <p>Name: {countryData.name}</p>
          <p>Code: {countryData.alpha2Code}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <Button type='primary' onClick={showModal} className='w-100'>
            Show More Info
          </Button>
        </Card>
      </List.Item>
      {isModalVisible ? (
        <Modal
          onOk={handleOk}
          visible={isModalVisible}
          onCancel={handleCancel}
          title={`${countryData.name}, ${countryData.alpha2Code} ${countryData.flag.emoji}`}
        >
          <p>Name: {countryData.name}</p>
          <p>Code: {countryData.alpha2Code}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <p>Other Code: {countryData.alpha3Code}</p>
          <p>Area: {countryData.area}</p>
          <p>
            Location: latitude {countryData.location.latitude}, longitude{' '}
            {countryData.location.longitude}
          </p>
          <p>Native Name: {countryData.nativeName}</p>
          {countryData.subregion ? <p>Subregion: {countryData.subregion.name}</p> : null}
          {countryData.officialLanguages ? (
            <>
              <p>Languages:</p>
              <ul>
                {countryData.officialLanguages.map((language: LanguagesT) => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
            </>
          ) : null}
          {countryData.callingCodes ? (
            <>
              <p>Calling Codes:</p>
              <ul>
                {countryData.callingCodes.map((callingCode: CallingCodeT) => (
                  <li key={callingCode.name}>+{callingCode.name}</li>
                ))}
              </ul>
            </>
          ) : null}
          {countryData.currencies ? (
            <>
              <p>Currencies:</p>
              <ul>
                {countryData.currencies.map((currency: CurrencyT) => (
                  <li key={currency.name}>
                    {currency.name} - {currency.symbol}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </Modal>
      ) : null}
    </>
  )
}

export default CountryItem
