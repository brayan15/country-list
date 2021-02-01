export const mockInitialState = {
  countries: {
    isLoading: false,
    status: 'NOT_REQUESTED',
    countries: {}
  }
}

export const mockCountries = {
  countries: {
    countries: {
      colombia: {
        name: 'Colombia',
        alpha2Code: 'CO',
        population: 48759958,
        capital: 'Bogotá',
        flag: {
          emoji: '🇨🇴'
        }
      }
    }
  }
}

export const mockStateData = {
  countries: {
    ...mockCountries.countries,
    isLoading: false,
    status: 'LOADED'
  }
}
