import { shallow } from 'enzyme'
import Header from '../../components/Header'

describe('<Header />', () => {
  it('should renders', () => {
    shallow(<Header />)
  })
})
