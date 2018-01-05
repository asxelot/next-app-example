import types from '../../../redux/types/counter'
import reducer from '../../../redux/reducers/counter'
import * as actions from '../../../redux/actions/counter'

describe('counter reducer', () => {
  it('should increment', () => {
    const state = reducer(undefined, actions.increment())
    expect(state.counter).toBe(1)
  })

  it('should increment', () => {
    const state = reducer(undefined, actions.decrement())
    expect(state.counter).toBe(-1)
  })
})
