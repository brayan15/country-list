// @flow
import { createSelector } from 'reselect'
import type { CountryT } from './types'
import type { AppStateT } from '../types'
import { getSearchTerm } from '../search/selectors'

const getCountriesData = (state: AppStateT) => state.countries

export const getCountriesAsArray = createSelector(
  state => getCountriesData(state).countries,
  state => getSearchTerm(state),
  (countries: { [name: string]: CountryT }, searchTerm: string) => {
    const searchTermRegex = searchTerm.toLowerCase()

    const filteredCountries = Object.values(countries)
      //$FlowFixMe
      .filter(
        (country: CountryT) =>
          country.name.toLowerCase() === searchTermRegex ||
          country.alpha2Code.toLowerCase() === searchTermRegex
      )
      //$FlowFixMe
      .map((country: CountryT) => country.name.toLowerCase())

    const countryArray = searchTerm ? filteredCountries : Object.keys(countries)

    return countryArray
  }
)

export const makeGetCountry = () =>
  createSelector(
    state => getCountriesData(state).countries,
    (_, country) => country,
    (countries: { [name: string]: CountryT }, country: string) => countries[country] || {}
  )
