// import React from 'react'

import SingleProduct from "../components/SingleProduct"

const Americano = ({products}) => {
    return (
        <>
            {
                products && products.map(item =>  item.categoryId === '3' &&  <SingleProduct item={item} key={item.id} /> )
            }
        </>
      )
}

export default Americano
