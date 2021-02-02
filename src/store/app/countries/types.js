// @flow
export type StatusT = 'NOT_REQUESTED' | 'LOADING' | 'LOADED' | 'ERROR'

export type LanguagesT = {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}

export type SubregionT = {
  name: string,
  region: {
    name: string
  }
}

export type CurrencyT = {
  name: string,
  symbol: string
}

export type FlagT = {
  emoji: string,
  emojiUnicode: string,
  svgFile: string
}

export type LocationT = {
  latitude: number,
  longitude: number
}

export type CallingCodeT = {
  name: string
}

export type CountryT = {
  name: string,
  alpha2Code: string,
  alpha3Code: string,
  area: number,
  capital: string,
  nativeName: string,
  numericCode: string,
  officialLanguages: Array<LanguagesT>,
  population: number,
  populationDensity: number,
  subregion: SubregionT,
  currencies: Array<CurrencyT>,
  location: LocationT,
  flag: FlagT,
  callingCodes: Array<CallingCodeT>
}

export type CountriesStateT = {
  isLoading: boolean,
  status: StatusT,
  countries: {
    [name: string]: CountryT
  }
}
