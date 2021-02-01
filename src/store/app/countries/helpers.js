// @flow
import type { CountriesStateT, CountryT } from './types'

const normalizeCountries = (state: CountriesStateT, payload: Array<CountryT>) => {
  const countries = payload.reduce(
    (acc, currentValue: CountryT) => ({
      ...acc,
      [currentValue.name.toLowerCase()]: {
        ...currentValue
      }
    }),
    {}
  )

  return { ...state, countries }
}

export default normalizeCountries
