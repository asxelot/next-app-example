import types from '../types/counter'

export const increment = () => ({
  type: types.INCREMENT
})

export const decrement = () => ({
  type: types.DECREMENT
})
