// import React from 'react'
import SingleProduct from '../components/SingleProduct'

const AllCofe = ({products}) => {
  return (
    <>
        {
            products && products.map(item => <SingleProduct item={item} key={item.id} /> )
            }
    </>
  )
}

export default AllCofe
