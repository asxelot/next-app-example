import es6promise from 'es6-promise'
import { all, put, takeEvery } from 'redux-saga/effects'

import api from '../../api'
import usersTypes from '../types/users'
import { getUsersSuccess, failure } from '../actions/users'

es6promise.polyfill()

function * getUsers () {
  try {
    const users = yield api.users.getAll()
    yield put(getUsersSuccess(users))
  } catch (err) {
    yield put(failure(err))
  }
}

export default function * usersSaga () {
  yield all([
    takeEvery(usersTypes.GET_USERS, getUsers)
  ])
}
