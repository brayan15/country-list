import { combineReducers } from 'redux'
import countries from './countries/reducer'

const rootReducer = combineReducers({ countries })

export default rootReducer
