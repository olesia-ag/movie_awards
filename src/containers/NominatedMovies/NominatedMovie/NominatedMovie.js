import React from 'react'
import NominatedMoviesProvider from '../../../context/nominated-movies-context'

const NominatedMovie = (props) => {
  const movieClasses = []
  if (props.toDelete){
    movieClasses.push('ToDelete')
  }
  console.log('nominated movie props:', props)
  return (
    <div>
      {console.log('rendering single movie')}
      <ul>
        <li>title: {props.title}</li>
        <li>released: {props.released}</li>
        <li></li>
      </ul>


    </div>
  )
}

export default NominatedMovie
