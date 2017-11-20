import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const initStore = initialState => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const connect = (...args) => {
  return Component => withRedux(initStore, ...args)(nextReduxSaga(Component))
}
