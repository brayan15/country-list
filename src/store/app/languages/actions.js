// @flow
import type { LanguageT } from './types'

export const FETCH_LANGUAGES = 'FETCH_LANGUAGES'
export const FETCH_LANGUAGES_LOADING = 'FETCH_LANGUAGES_LOADING'
export const FETCH_LANGUAGES_ERROR = 'FETCH_LANGUAGES_ERROR'

export const fetchLanguages = (languages: Array<LanguageT>) => ({
  type: FETCH_LANGUAGES,
  payload: languages
})

export const fetchLanguagesLoading = () => ({
  type: FETCH_LANGUAGES_LOADING
})

export const fetchLanguagesError = () => ({
  type: FETCH_LANGUAGES_ERROR
})
