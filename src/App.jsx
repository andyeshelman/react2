import { useState } from 'react'

import './App.css'
import MoviesList from './MoviesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Movie Night!</h1>
      <MoviesList />
    </>
  )
}

export default App
