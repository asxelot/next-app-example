import { shallow } from 'enzyme'
import Header from '../../components/Header'

describe('<Header />', () => {
  it('should renders', () => {
    expect(shallow(<Header />)).toHaveLength(1)
  })
})
