import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdotereducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import timeoutReducer from './reducers/timeoutReducer'
const reducer = combineReducers({
    anecdotes: anecdotereducer,
    notification: notificationReducer,
    filter: filterReducer,
    timeout: timeoutReducer
  })


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store