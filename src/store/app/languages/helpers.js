// @flow
import type { LanguagesStateT, LanguageT } from './types'

const normalizeLanguages = (state: LanguagesStateT, payload: Array<LanguageT>) => {
  const languages = payload.reduce(
    (acc, currentValue: LanguageT) => ({
      ...acc,
      [currentValue.name.toLowerCase()]: {
        ...currentValue
      }
    }),
    {}
  )

  return { ...state, languages }
}

export default normalizeLanguages
