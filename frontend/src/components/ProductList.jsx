import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartUpdate } from '../Redux/Auth/authAction';

const ProductList = ({productData}) => {
  const dispatch = useDispatch();
  const [User, setUser] = useState({});
  const UserSelection = useSelector((store) => store.authReducer.User);
    console.log(productData)
  

    useEffect(() => {
      UserSelection && setUser(UserSelection);
    }, []);


    const clickHandler = (e, product, User) => {
      e.stopPropagation();
      let flag = true;
      console.log(product, User);
      const { cartProducts } = User;
      let index =cartProducts && cartProducts.findIndex((el) => el.id === product.id);
      if (index !== -1) {
        alert("this product has already added");
        flag = false;
      }
      if(flag){
        dispatch(cartUpdate(User._id,product)).then((res)=>{
          console.log(res);
        })
    };
  
    }
  return (
    <div className='grid grid-cols-5 gap-4 '>
      {productData?.map((el,index)=>( 
      <div className='shadow-md flex justify-center flex-col items-center p-2' key={el.id}  onClick={(e) => {
        clickHandler(e, el, User);
      }}>
        <img src={el.images[0]} alt=""  className=' h-[150px]'/>
        <p className="product-title">{el.tags[1]}</p>
      </div>

      ))}
    </div>
  )
}

export default ProductList
