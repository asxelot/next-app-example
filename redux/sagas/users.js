import { all, put, takeEvery } from 'redux-saga/effects'
import es6promise from 'es6-promise'

import api from '../../services/api'
import usersTypes from '../types/users'
import { getUsersSuccess, failure } from '../actions/users'

es6promise.polyfill()

function * getUsersSaga () {
  try {
    const users = yield api.getUsers()
    yield put(getUsersSuccess(users))
  } catch (err) {
    yield put(failure(err))
  }
}

export default function * rootSaga () {
  yield all([
    takeEvery(usersTypes.GET_USERS, getUsersSaga)
  ])
}
