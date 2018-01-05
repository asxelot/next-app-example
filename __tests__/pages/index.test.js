import _ from 'lodash'
import { shallow } from 'enzyme'

import { Index } from '../../pages/index'
import Header from '../../components/Header'
import Counter from '../../components/Counter'

describe('<Index />', () => {
  let wrapper
  const props = {
    users: [
      { id: 0, name: 'Foo' },
      { id: 1, name: 'Bar' }
    ],
    counter: 0,
    increment: jest.fn(),
    decrement: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Index {...props} />)
  })

  it('should render', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should contains <Header />', () => {
    expect(wrapper.contains(<Header />)).toBe(true)
  })

  it('should contains <Counter />', () => {
    const counterProps = _.pick(props, 'counter', 'increment', 'decrement')
    expect(wrapper.contains(<Counter {...counterProps} />)).toBe(true)
  })

  it('should render users', () => {
    expect(wrapper.find('.user')).toHaveLength(2)
  })
})
