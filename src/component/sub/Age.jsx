import React from 'react'

function Age(props) {
  return (
    <div>
      <h3 className='display-3 text-danger'>Age = {props.age}</h3>
      <button onClick={props.ageHandler} className='btn btn-primary'>Inc Age</button>
    </div>
  )
}

export default Age
