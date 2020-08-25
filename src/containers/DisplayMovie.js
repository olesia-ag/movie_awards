import React from 'react'

const displayMovie = (props) =>{
  const {title, released, id} = props
console.log(props)
  return (
    <div>
      <p>{title}</p>
      <p>{released}</p>
      <p>nominate</p>
    </div>
  )
}

export default displayMovie
