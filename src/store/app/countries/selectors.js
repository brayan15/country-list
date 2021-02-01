// @flow
import { createSelector } from 'reselect'
import type { CountryT } from './types'

const getCountriesData = state => state.countries

export const getCountriesAsArray = createSelector(
  state => getCountriesData(state).countries,
  (countries: { [name: string]: CountryT }) => Object.keys(countries)
)

export const makeGetCountry = () =>
  createSelector(
    state => getCountriesData(state).countries,
    (_, country) => country,
    (countries: { [name: string]: CountryT }, country: string) => countries[country] || {}
  )
