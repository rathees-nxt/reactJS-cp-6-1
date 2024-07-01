// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  toSetRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: newRandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.toSetRandomNumber}
          >
            Generate
          </button>
          <p className="count-para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
