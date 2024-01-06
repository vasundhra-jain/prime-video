// Write your code here
import Slider from 'react-slick'
import MoviesItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <ul>
          {moviesList.map(each => {
            if (each.categoryId === 'ACTION') {
              return <MoviesItem detail={each} key={each.id} />
            }
            return null
          })}
        </ul>
      </Slider>
    </div>
  )
}

export default MoviesSlider
