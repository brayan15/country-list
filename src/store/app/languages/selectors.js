//@flow
import { createSelector } from 'reselect'
import type { LanguageT } from './types'

const getLanguagesData = state => state.languages

export const getLanguagesAsArray = createSelector(
  state => getLanguagesData(state).languages,
  (languages: { [name: string]: LanguageT }) => Object.keys(languages)
)
