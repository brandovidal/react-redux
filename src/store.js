import { noteReducer } from './reducer/noteReducer'
import { filterReducer } from './reducer/filterReducer'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
