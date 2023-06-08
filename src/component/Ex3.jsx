import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'



const url = "https://fakestoreapi.com"

function Ex3(props) {
const [products,setProducts] = useState([])

const[currentItems, setCurrentItems] = useState([])
const[offset,setOffset]= useState(0)
const[pageCount,setPageCount] =useState(0)


const getProducts = async () => {
  fetch(`${url}/products`)
        .then(res => res.json())
        .then(out => {
            // console.log('products =', out)
            setProducts(out)
        }).catch(err => console.log(err.message))
}

useEffect(() => {
  getProducts()
  const endOffset = offset + props.itemsPerPage;
  const data = products ? products.slice(offset,endOffset) : []
  setCurrentItems(data)
  const pCount = Math.ceil(products.length / props.itemsPerPage)
      setPageCount(pCount)
},[products])

const handler = (e) => {
  console.log('item =', e.selected)
  const newOffset = Number(e.selected * props.itemsPerPage)  % products.length;
    console.log('newOffset =', newOffset)
    setOffset(newOffset)
}

  if(!products)
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">no products .. server error</h3>
            </div>
        </div>
      </div>
  )
  return(
    <div className="row">
    {
            products && products.map((item,index) => {
                return (
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <div className="card">
                            <img src={item.image ? item.image :"#"} alt="no image" className="card-img-top" height={300} />
                            <div className="card-body">
                                <h6 className="text-center text-success"> {item.title} </h6>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Price</strong>
                                        <span className="float-end"> &#8377; {item.price} </span>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                )
            })
        }
        <div className="row">
        <div className="col-md-12">
            <ReactPaginate
                pageCount={pageCount}
                className="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                nextClassName='page-item'
                nextLinkClassName="page-link"
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

export default Ex3
