import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeProduct } from '../Redux/CartSlice'


const Cart = () => {

  const products = useSelector((state)=>state.cart.products);
  const dispatch = useDispatch();

  const totalprice = products.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0);
  const totalquantity = products.reduce((prev,curr)=>prev + (curr.quantity || 1),0)
    
  return (
    <>
    <div className="container mt-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Total Quantity: {totalquantity}</h1>
            <h1>Total Price: ${totalprice.toFixed(2)}</h1>
          </div>
          {products.map((ele, ind) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={ind}>
              <div className="card h-100">
                <img src={ele.images[0]} alt={ele.title} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.description}</p>
                  <p className="card-text"> Price: ${ele.price}</p>
                  <p className="card-text">Discount: {ele.discountPercentage}%</p>
                  <p className="card-text">Brand: {ele.brand}</p>
                  <p className="card-text">Category: {ele.category}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" onClick={() => dispatch(incrementQuantity(ele.id))}>+</button>
                    <span className="mx-2">{ele.quantity || 1}</span>
                    <button className="btn btn-primary" onClick={() => dispatch(decrementQuantity(ele.id))}>-</button>
                    <button className="btn btn-danger" onClick={() => dispatch(removeProduct(ele.id))}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default Cart