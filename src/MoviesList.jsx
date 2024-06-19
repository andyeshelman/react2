import { useState } from 'react'

import initMovies from './assets/initMovies'

function MoviesList() {
  
  const [movies, setMovies] = useState(initMovies)
  const [filterBy, setFilterBy] = useState(false)
  const [details, setDetails] = useState({})

  function Filters({movieGenres}) {
    const genres = new Set(movieGenres.flat())
    return (
      <div>
        <button onClick={()=>setFilterBy(false)} className='filters'>All</button>
        {[...genres].map(genre => (
          <button key={genre} onClick={()=>setFilterBy(genre)} className='filters'>{genre}</button>
        ))}
      </div>
    )
  }

  function Details({movie}) {
    return (
      <ul>
        <li>Genres: {movie.genres.join(", ")}</li>
        <li>Year: {movie.year}</li>
        <li>Description: {movie.description}</li>
      </ul>
    )
  }

  const removeMovie = id => () => setMovies(movies.filter(movie => movie.id != id))

  const toggleDetails = id => () => setDetails({...details, [id]: !details[id]})

  return (
    <div id="theList">
      <Filters movieGenres={movies.map(movie => movie.genres)} />
      <ul>
        {movies.filter(movie => !filterBy || movie.genres.includes(filterBy)).map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button className='btn' onClick={toggleDetails(movie.id)}>More</button>
            <button className='btn' onClick={removeMovie(movie.id)}>Remove</button>
            {details[movie.id] && <Details movie={movie} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList
