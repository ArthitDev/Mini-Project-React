import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard'
import './MovieList.scss'
import { RootState } from '../../store/store'

const MovieList = () => {
  const {movies} = useSelector((state:RootState) => state.movies)
  return (
    <div className='movie-container'>
      {movies && movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  )
}

export default MovieList