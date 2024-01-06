// Write your code here
const MovieItem = props => {
  const {detail} = props
  const {thumbnailUrl, videoUrl} = detail
  return (
    <li>
      <img src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default MovieItem
