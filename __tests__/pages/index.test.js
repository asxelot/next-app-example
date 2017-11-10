import React from 'react'
import { shallow } from 'enzyme'
import Index from '../../pages/index'

describe('<Index />', () => {
  it('should renders', () => {
    shallow(<Index />)
  })
})
