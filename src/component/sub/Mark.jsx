import React from 'react'

function Mark(props) {
  return (
    <div className='row'>
      <div className="col-md-12 text-center">
      <h3 className='display-3 text-danger'> marks = {props.mark}</h3>
      <button onClick={props.handler} className='btn btn-primary'>Inc marks</button>
      </div>
    </div>
  )
}

export default Mark
