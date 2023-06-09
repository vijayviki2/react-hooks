import React from 'react'
import { memo } from 'react'

const MarkInfo = memo((props) => {
    return(
        <div className="row">
          <div className='text-center'>
          <h3 className='display-3 text-danger'>{props.info.result}</h3>
          </div>
        </div>
    )
});

export default MarkInfo
