import React,{useState} from 'react'
import "./ProductSection.css";
import SingleCardSection from './SingleCardSection';
import apidata from "../data.js";

const ProductSection = () => {
  const[products,setProducts] = useState(apidata)

    return (

      <>
       <div className='product-container'>
      <h1>List of Products</h1>
        <div className='product-container1'>
            

            {products.map((product, index) => (
            <SingleCardSection key={index} product={product} />
          ))}
           
            
        </div>
        </div>
        </>
    )
}

export default ProductSection
