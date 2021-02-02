//@flow
import type { StatusT } from '../countries/types'

export type LanguageCountryT = {
  name: string
}

export type LanguageT = {
  countries: Array<LanguageCountryT>,
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}

export type LanguagesStateT = {
  isLoading: boolean,
  status: StatusT,
  languages: {
    [name: string]: LanguageT
  }
}
