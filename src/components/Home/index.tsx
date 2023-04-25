import {useState,useEffect} from 'react'
import { Movie } from '../../models/movie.model'
import MovieApi from '../../api/MovieApi'
import { APIKeys } from '../../api/MovieApiKey'
import './Home.scss'

type Props = {}

const Home = ({}: Props) => {
    const [movies,setMovies] = useState<Movie>()
    const [search,setSearch] = useState<string>('')
    const fetchMovies = async () => {
        try {
            const searchKey = search ? search : 'spider'
            const {data:movies} = await MovieApi.get(`?apikey=${APIKeys}&s=${searchKey}&type=movie`)
            setMovies(movies)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() =>{
        fetchMovies()
    }),[movies]
  return (
    <>
    <div>
        <h3 style={{margin: '1rem 0'}}>Movies</h3>
        <input 
        type='text' 
        placeholder='input search..' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
            
        </ul>
    </div>
    </>
  )
}

export default Home