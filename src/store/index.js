import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from '../Middlewares/logger'
import { movieReducer } from './reducers/movieReducer'

const reducers = combineReducers({movieReducer})

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store
