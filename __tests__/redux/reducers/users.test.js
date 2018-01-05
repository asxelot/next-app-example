import types from '../../../redux/types/users'
import reducer from '../../../redux/reducers/users'
import * as actions from '../../../redux/actions/users'

describe('users reducer', () => {
  it('should set users', () => {
    const users = [
      { id: 0, name: 'Foo' },
      { id: 1, name: 'Bar' }
    ]
    const state = reducer(undefined, actions.getUsersSuccess(users))
    expect(state.users).toBe(users)
  })

  it('should set error', () => {
    const error = new Error('Some error')
    const state = reducer(undefined, actions.failure(error))
    expect(state.error).toBe(error)
  })
})
