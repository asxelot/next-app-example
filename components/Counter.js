import PropTypes from 'prop-types'

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <p>{counter}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Counter
