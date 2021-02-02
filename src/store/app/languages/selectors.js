//@flow
import { createSelector } from 'reselect'
import type {LanguageCountryT, LanguageT} from './types'
import { getFilterTerm } from '../search/selectors'

const getLanguagesData = state => state.languages

export const getLanguagesAsArray = createSelector(
  state => getLanguagesData(state).languages,
  (languages: { [name: string]: LanguageT }) => Object.keys(languages)
)

export const getCountriesByLanguage = createSelector(
  state => getLanguagesData(state).languages,
  getFilterTerm,
  (languages: { [name: string]: LanguageT }, filterTerm: string) => {
      const countries = languages[filterTerm]?.countries || []

      return countries.map((country: LanguageCountryT) => country.name.toLowerCase())
  }
)
