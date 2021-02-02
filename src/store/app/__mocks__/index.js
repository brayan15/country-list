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
        callingCodes: [{ name: '57' }],
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

export const mockCountriesWithEmptyData = {
  countries: {
    countries: {
      colombia: {
        name: 'Colombia',
        nativeName: 'Colombia',
        alpha2Code: 'CO',
        alpha3Code: 'COL',
        population: 48759958,
        capital: 'Bogotá',
        location: { latitude: 4, longitude: -72 },
        officialLanguages: [],
        callingCodes: [],
        currencies: [],
        flag: {
          emoji: '🇨🇴'
        }
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

export const mockStateWithEmptyData = {
  countries: {
    ...mockCountriesWithEmptyData.countries,
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
