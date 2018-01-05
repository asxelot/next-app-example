import React from 'react'

import Input from '../components/Input/Input'

export default class UserForm extends React.Component {
  state = {
    email: '',
    password: '',
    agree: false
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(e.target, this.state)
    // this.props.onSubmit(this.state)
  }

  render () {
    const { email, password, agree } = this.state

    return (
      <form onSubmit={this.onSubmit} noValidate>
        <Input
          label='Email'
          name='email'
          value={email}
          onChange={email => this.setState({ email })}
        />
        <Input
          label='Password'
          name='password'
          value={password}
          onChange={password => this.setState({ password })}
        />
        <Input
          label='I agree with rules'
          name='agree'
          type='checkbox'
          value={agree}
          onChange={agree => this.setState({ agree })}
        />
        <button>submit</button>
      </form>
    )
  }
}
