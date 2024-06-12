import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProduct} from '../../Redux/Product/productAction'
import ProductList from '../components/ProductList';

export default function Home() {


  const btnref = useRef();

  const dispatch = useDispatch();
  const productData = useSelector((store) => store.productReducer.products);
  console.log(productData);
  useEffect(() => {
   getProduct(dispatch)
  }, []);
  return (
    <div className=''>
       <ProductList productData ={productData}/>
    </div>
  )
}
