export const mockInitialState = {
  countries: {
    isLoading: false,
    status: 'NOT_REQUESTED',
    countries: {}
  },
  search: {
    searchTerm: '',
    filterTerm: ''
  },
  languages: {
    isLoading: false,
    status: 'NOT_REQUESTED',
    languages: {}
  }
}

export const mockCountries = {
  countries: {
    countries: {
      colombia: {
        name: 'Colombia',
        nativeName: 'Colombia',
        alpha2Code: 'CO',
        alpha3Code: 'COL',
        population: 48759958,
        capital: 'Bogotá',
        callingCode: { name: '57' },
        currencies: [{ name: 'Colombian peso', symbol: '$' }],
        location: { latitude: 4, longitude: -72 },
        flag: {
          emoji: '🇨🇴'
        },
        subregion: {
          name: 'South America',
          region: { name: 'Americas' }
        },
        officialLanguages: [
          { iso639_1: 'es', iso639_2: 'spa', name: 'Spanish', nativeName: 'Español' }
        ]
      }
    }
  }
}

export const mockLanguages = {
  languages: {
    languages: {
      spanish: {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
        countries: [{ name: 'Colombia' }]
      }
    }
  }
}

export const mockStateData = {
  countries: {
    ...mockCountries.countries,
    isLoading: false,
    status: 'LOADED'
  },
  search: {
    searchTerm: '',
    filterTerm: ''
  },
  languages: {
    ...mockLanguages.languages,
    isLoading: false,
    status: 'LOADED'
  }
}
