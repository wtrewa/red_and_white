import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartUpdate } from '../Redux/Auth/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ productData }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const userSelection = useSelector((store) => store.authReducer.User);
  console.log(productData);

  useEffect(() => {
    userSelection && setUser(userSelection);
  }, [userSelection]);

  const clickHandler = (e, product, user) => {
    e.stopPropagation();
    if (user._id) {
      const { cartProducts } = user;

      if (!cartProducts) {
        toast.error("Cart information not available.");
        return;
      }

      const isProductInCart = cartProducts.some((item) => item.id === product.id);
      if (isProductInCart) {
        toast.warning("This product is already in the cart.");
        return;
      }

      dispatch(cartUpdate(user._id, product)).then((res) => {
        console.log(res);
        toast.success("Product added to cart successfully.");
      });
    } else {
      toast.error('Login first');
    }
  };

  return (
    <div >
      <ToastContainer />
      <div className='grid grid-cols-5 gap-4 '>
      {productData?.map((el, index) => ( 
        <div className='shadow-md flex justify-center flex-col items-center p-2' key={el.id}  onClick={(e) => {
          clickHandler(e, el, user);
        }}>
          <img src={el.image} alt=""  className=' h-[150px]'/>
          <p className="product-title">{el.title}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
