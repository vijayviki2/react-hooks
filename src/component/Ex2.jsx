import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const url = "https://jsonplaceholder.typicode.com"

/*
1.Mount
useEffect( () => {

},[])
2.Update
useEffect(() =>{

},[dependency])
3.Unmount
useEffect( () => {
    return() => {

    }
},[])
*/

function Ex2(props) {
    const [posts,setPosts] = useState([])

    //pagination states
    const[currentItems, setCurrentItems] = useState([])
    const[itemOffset,setItemOffset]= useState(0)// satrting items
    const[pageCount,setPageCount] =useState(0)


   //useEffect => api call,intial values
    const getPosts = async () => {
        await fetch(`${url}/posts`)
        .then(res => res.json())   
        .then(out => {              /*resolved state*/
            // console.log('output =', out)
            setPosts(out)
        }).catch(err => console.log(err.message)) // reject state
    }

    useEffect(() => {
        getPosts()
        const endOffset = itemOffset + props.itemPerPage
        // console.log(`init offset = ${itemOffset} - end offset =${endOffset}`)
        const data = posts.slice(itemOffset,endOffset)
        setCurrentItems(data)
        const pCount = Math.ceil(posts.length / props.itemPerPage)
        setPageCount(pCount)
    },[posts])

    //page click handle, e = event
    const handler = (e) => {
        console.log('item = ',e.selected)
        const newOffset = Number(e.selected * props.itemPerPage)  % posts.length;
        console.log('newOffset =', newOffset)
        setItemOffset(newOffset)
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Ex2</h3>
            </div>
        </div>
       <div className="row">
        {
            currentItems && currentItems.map((item,index) => {
                return(
                    <div className="col-md-4 col-sm-12 col-lg 4" key={index}>
                        <div className="card mt-2 mb-2">
                            <div className="card-header">
                                <h5 className="card-title text-center">{item.id} { item.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className='text-success'>
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
       </div>

       <div className="row">
        <div className="col-md-12">
     
     
        <ReactPaginate 
        pageCount={pageCount}
        className='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        activeClassName='active'
        activeLinkClassName='active'
        onPageChange={handler}
        
        />

        </div>
       </div>
    </div>
    
  )
}

export default Ex2
