// Write your code here

import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="movies-container">
          <h1 className="category-heading">Action Movies</h1>
          <MoviesSlider moviesList={moviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
