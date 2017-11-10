import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import counter from './reducers/counter'
import users from './reducers/users'

import usersSaga from './sagas/users'

export const reducer = combineReducers({
  counter,
  users
})

const sagaMiddleware = createSagaMiddleware()

export const initStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(usersSaga)

  return store
}

export const connect = (...args) => {
  return Component => withRedux(initStore, ...args)(nextReduxSaga(Component))
}
