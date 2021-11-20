import { noteReducer } from './reducer/noteReducer'
import { filterReducer } from './reducer/filterReducer'

import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

export const store = createStore(reducer, composeWithDevTools())
