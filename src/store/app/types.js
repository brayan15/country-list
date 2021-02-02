// @flow
import type { CountriesStateT } from './countries/types'
import type { SearchStateT } from './search/types'

export type ActionT = {
  type: string,
  payload: any
}

export type AppStateT = {
  countries: CountriesStateT,
  search: SearchStateT
}
