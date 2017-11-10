import types from '../types/users'

const initState = {
  users: [],
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users
      }

    case types.FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
