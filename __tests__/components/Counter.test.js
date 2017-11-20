import { shallow, render } from 'enzyme'
import Counter from '../../components/Counter'

describe('<Counter />', () => {
  let wrapper
  const props = {
    counter: 0,
    increment: jest.fn(),
    decrement: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Counter {...props} />)
  })

  it('should renders', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render counter', () => {
    expect(wrapper.find('p').text()).toBe(props.counter.toString())
  })

  it('should increment', () => {
    wrapper.find('button').first().simulate('click')
    expect(props.increment).toHaveBeenCalled()
  })

  it('should decrement', () => {
    wrapper.find('button').last().simulate('click')
    expect(props.decrement).toHaveBeenCalled()
  })
})
