import thunk from "redux-thunk"
import { reducer as GuardiansReducer } from "./HospitalData/reducer"

import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

const rootReducer = combineReducers({ GuardiansReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store }