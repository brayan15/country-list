// @flow
import { createSelector } from 'reselect'
import type { CountryT } from './types'
import type { AppStateT } from '../types'
import { getFilterTerm, getSearchTerm } from '../search/selectors'
import { getCountriesByLanguage } from '../languages/selectors'

const getCountriesData = (state: AppStateT) => state.countries

export const getCountriesAsArray = createSelector(
  state => getCountriesData(state).countries,
  state => getSearchTerm(state),
  state => getCountriesByLanguage(state),
  state => getFilterTerm(state),
  (
    countries: { [name: string]: CountryT },
    searchTerm: string,
    countriesByLanguage: Array<string>,
    filterTerm: string
  ) => {
    let countriesArray = []
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

    if (searchTerm && filterTerm !== '') {
      countriesArray = filteredCountries.filter((country: string) =>
        countriesByLanguage.includes(country)
      )
    } else if (searchTerm) {
      countriesArray = filteredCountries
    } else if (filterTerm !== '') {
      countriesArray = countriesByLanguage
    } else {
      countriesArray = Object.keys(countries)
    }

    return countriesArray
  }
)

export const makeGetCountry = () =>
  createSelector(
    state => getCountriesData(state).countries,
    (_, country) => country,
    (countries: { [name: string]: CountryT }, country: string) => countries[country] || {}
  )

export const areCountriesLoading = createSelector(
    state => getCountriesData(state).isLoading,
    (isLoading: boolean) => isLoading
)
