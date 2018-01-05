import React from 'react'
import PropTypes from 'prop-types'

import scss from './Input.scss'

export default class Input extends React.Component {
  onChange = e => {
    const { onChange = _ => _ } = this.props
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    onChange(value)
  }

  render () {
    const { label, type = 'text', name, value, onFocus, onBlur } = this.props

    return (
      <div>
        <label className={type === 'checkbox' ? scss.checkbox : scss.label}>
          <div>{label}</div>
          <input
            type={type}
            name={name}
            value={value}
            onChange={this.onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </label>
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}
