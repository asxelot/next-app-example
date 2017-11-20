import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { connect } from '../redux/store'
import * as usersActions from '../redux/actions/users'
import * as counterActions from '../redux/actions/counter'

import Header from '../components/Header'
import Counter from '../components/Counter'

export class Index extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  static async getInitialProps ({ store }) {
    const state = store.getState()

    if (!state.users.users.length) {
      await store.dispatch(usersActions.getUsers())
    }
  }

  render () {
    const { users, counter, increment, decrement } = this.props

    return (
      <div>
        <Header />
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
        <ul>
          {users.map(user =>
            <li className='user' key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    counter: state.counter.counter,
    users: state.users.users
  }),
  dispatch => bindActionCreators(counterActions, dispatch)
)(Index)
