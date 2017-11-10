import types from '../types/users'

export const failure = error => ({
  type: types.FAILURE,
  payload: { error }
})

export const getUsers = () => ({
  type: types.GET_USERS
})

export const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  payload: { users }
})
