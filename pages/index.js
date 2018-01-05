import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { connect } from '../redux/store'
import * as usersActions from '../redux/actions/users'
import * as counterActions from '../redux/actions/counter'

import Header from '../components/Header'
import Counter from '../components/Counter'
import UserForm from '../components/UserForm'

export class Index extends React.Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(usersActions.getUsers())
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
        <UserForm />
        <ul>
          {users.map(user =>
            <li className='user' key={user.id}>{user.firstname} {user.lastname}</li>
          )}
        </ul>
      </div>
    )
  }
}

Index.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default connect(
  state => ({
    counter: state.counter.counter,
    users: state.users.users
  }),
  dispatch => bindActionCreators(counterActions, dispatch)
)(Index)
