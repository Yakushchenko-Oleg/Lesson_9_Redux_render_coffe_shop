// import React from 'react'

import SingleProduct from "../components/SingleProduct"

const Machiato = ({products}) => {

  return (
    <>
        {
            products && products.map(item =>  item.categoryId === '1' &&  <SingleProduct item={item} key={item.id} /> )
        }
    </>
  )
}

export default Machiato
