import { combineReducers } from 'redux'
import countries from './countries/reducer'
import search from './search/reducer'
import languages from './languages/reducer'

const rootReducer = combineReducers({ countries, search, languages })

export default rootReducer
