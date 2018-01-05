import { put } from 'redux-saga/effects'

import * as usersSaga from '../../../redux/sagas/users'
import * as usersActions from '../../../redux/actions/users'

describe('users saga', () => {
  const fakeResponse = { success: true, fake: true }

  it('should load users', async () => {
    const gen = usersSaga.getUsers()
    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(usersActions.getUsersSuccess()))
    expect(gen.next().done).toBe(true)
  })
})
