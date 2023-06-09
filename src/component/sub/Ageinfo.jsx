import React from 'react'

function Ageinfo(props) {
  return (
    <div>
      <h3 className='display-3 text-danger'>{props.ageInfo()}</h3>
    </div>
  )
}

export default Ageinfo
