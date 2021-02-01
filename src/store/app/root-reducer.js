import { combineReducers } from 'redux'
import countries from './countries/reducer'
import search from './search/reducer'

const rootReducer = combineReducers({ countries, search })

export default rootReducer
