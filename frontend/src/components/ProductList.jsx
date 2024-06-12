import React from 'react'

const ProductList = ({productData}) => {

    console.log(productData)
  return (
    <div className='grid grid-cols-5 gap-4 '>
      {productData?.map((el,index)=>( 
      <div className='shadow-md flex justify-center flex-col items-center p-2' key={el.id}>
        <img src={el.images[0]} alt=""  className=' h-[150px]'/>
        <p className="product-title">{el.tags[1]}</p>
      </div>

      ))}
    </div>
  )
}

export default ProductList
