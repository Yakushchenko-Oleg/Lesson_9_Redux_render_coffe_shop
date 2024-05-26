// import React from 'react'

import SingleProduct from "../components/SingleProduct"

const Late = ({products}) => {
    return (
        <>
            {
                products && products.map(item =>  item.categoryId === '2' &&  <SingleProduct item={item} key={item.id} /> )
            }
        </>
      )
}

export default Late
