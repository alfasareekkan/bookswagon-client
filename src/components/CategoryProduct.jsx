import React from 'react';
import './Product.css'

function CategoryProduct({product,children}) {
  return (
      <div className="column-product">
          <img src={product.image} alt="" style={{ width: '10rem',height:"12rem", }}/>
          <div className="product-details-1">
              <h6>{product.title }</h6>
              <p><span style={{color:"#555555",fontWeight:"500"}}>By :</span> {product.author} </p>
              <p>
                  <span style={{ color: "#555555", fontWeight: "500" }}>Publisher :</span>
                  {product.publisher }
              </p>

              <div className="product-details-2">
                  <p style={{ color: "#BC3232", fontWeight: "700", fontSize: "1rem" }}>${product.price }</p>
                  <div style={{marginLeft:"3rem"}}>
                      <p>Release</p>

                      <p>Language :{ product.language}</p>
                  </div>
              </div>
          </div>
          <div className='product-details-3'>
              {
                  children
              }
          </div>
    </div>
  )
}

export default CategoryProduct