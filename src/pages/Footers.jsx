import React from 'react'

const Footers = () => {
  return (
   <>
   <footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">E-Shop</h5>
          <p>
            Your one-stop shop for the best products. Quality and customer satisfaction guaranteed.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#" className="text-dark">Home</a></li>
            <li><a href="#" className="text-dark">Products</a></li>
            <li><a href="#" className="text-dark">Cart</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#" className="text-dark">Email</a></li>
            <li><a href="#" className="text-dark">Phone</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center p-3 bg-dark text-white">
      © 2024 E-Shop. All Rights Reserved.
    </div>
  </footer>
   </>
  )
}

export default Footers