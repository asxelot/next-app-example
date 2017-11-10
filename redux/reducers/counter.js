import types from '../types/counter'

const initState = {
  counter: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }

    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      return state
  }
}
