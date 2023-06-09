import React, {useState, useCallback}from 'react'
import Age from './sub/Age'
import Ageinfo from './sub/Ageinfo'


//useCallback = function will return the memorised value of callback
//useCallback = function will return the memorised function of callback

function Ex4() {

  const [age,setAge] = useState(10)
  const incrementAge = () => {
    setAge(age+1)
  }

  const userAge = `David age is ${age} Years`

  // useCallback will return a memorized version of the callback that only changes if one of the inputs has changed

  const  updateAge = useCallback(() => {
    return userAge
  },[age])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useCallback</h3>
            </div>
        </div>
        <Age age={age} ageHandler={incrementAge}/>
        <Ageinfo ageInfo={updateAge}/>
    </div>
  )
}

export default Ex4
