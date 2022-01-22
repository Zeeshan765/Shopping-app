import React from 'react'
import "./SingleCardSection.css";


const SingleCardSection = ({product}) => {
    console.log(product);
    return (
        <>
        <div className='main-card-container'>
        <div className='card-container'>
            <div className='upper-card-body'>
               <img src ={product.image} alt="Mobile Picture"/>
            </div>
            <div className="lower-card-body">
          <h3>{product.name} </h3>
          <h2>{product.price} </h2>
          <p>
          {product.description} 
          </p>
          <button className="btn1">
              View Detail
          </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default SingleCardSection
