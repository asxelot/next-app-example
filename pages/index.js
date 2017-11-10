import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import cxs from 'cxs'

import { connect } from '../redux/store'
import * as counterActions from '../redux/actions/counter'
import * as usersActions from '../redux/actions/users'

class Index extends React.Component {
  static async getInitialProps ({ store }) {
    const state = store.getState()

    if (!state.users.users.length) {
      store.dispatch(usersActions.getUsers())
    }
  }

  render () {
    const { users, counter, increment, decrement } = this.props

    return (
      <div>
        <h1 className={cx.header}>Hello world</h1>
        <p>counter {counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <ul>
          {users.map(user =>
            <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Index.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  counter: PropTypes.number
}

const cx = {
  header: cxs({
    color: 'red',
    ':hover': {
      color: 'blue'
    }
  })
}

export default connect(
  state => ({
    counter: state.counter.counter,
    users: state.users.users
  }),
  dispatch => bindActionCreators(counterActions, dispatch)
)(Index)
