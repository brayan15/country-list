// @flow
import type { SearchStateT } from './search/types'
import type { CountriesStateT } from './countries/types'
import type { LanguagesStateT } from './languages/types'

export type ActionT = {
  type: string,
  payload: any
}

export type AppStateT = {
  search: SearchStateT,
  countries: CountriesStateT,
  languages: LanguagesStateT
}
