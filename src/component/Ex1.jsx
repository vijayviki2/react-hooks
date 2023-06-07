import React, { useState } from 'react'

//react hooks => use only in functional component

function Ex1() {
    // const [state,handler] - useaState(intialvalue) // declare states in functional component
    const [x,setX] = useState(10)
    const[title,setTitle] = useState('Welcome to react state')
    const[isView,setIsView] = useState(true)
    const[colors,setColors] = useState(['Red','Blue','Green'])
    const[user,setUser] = useState ({
        name: "Raju",
        email : 'raju@gmail.com'
    })

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useState</h3>
            </div>
        </div>
      <div className="row">
        <div className="col-md-12">
            <h3 className="text-warning"> x = { x }</h3>
            <h3 className="text-warning"> title = { title }</h3>
            <h3 className="text-warning"> { isView ? "say true":" say false"}  </h3>
            <h3 className='text-warning'> 
            {
                colors.map((item,index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
            </h3>
            <h3 className="text-warning"> 
            users = {user.name}
            
            </h3>

        </div>
      </div>
    </div>
  )
}

export default Ex1
