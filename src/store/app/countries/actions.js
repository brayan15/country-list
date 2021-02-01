// @flow
import type { CountryT } from './types'

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_LOADING = 'FETCH_COUNTRIES_LOADING'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'

export const fetchCountries = (countries: Array<CountryT>) => ({
  type: FETCH_COUNTRIES,
  payload: countries
})

export const fetchCountriesLoading = () => ({
  type: FETCH_COUNTRIES_LOADING
})

export const fetchCountriesError = () => ({
  type: FETCH_COUNTRIES_ERROR
})
