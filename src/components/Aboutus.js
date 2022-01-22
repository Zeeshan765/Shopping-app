import React from "react";
import "./Aboutus.css";
import Aboutuspic from "../Assets/about.jpg";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container">
        <h1>About us </h1>
      </div>

      <div className="about-detail">
          
        <div className="left">
          <p className="about-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            ateos aliquid reiciendis reprehenderit a corporis illo nisi deserunt
            ipsam doloribus aliquam molestiae.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quae, ateos aliquid reiciendis
            reprehenderit a corporis illo nisi deserunt ipsam doloribus aliquam
            molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quae, ateos aliquid reiciendis reprehenderit a corporis illo nisi
            deserunt ipsam doloribus aliquam molestiae. consectetur adipisicing
            elit. Quae, ateos aliquid reiciendis reprehenderit a corporis illo
            nisi deserunt ipsam doloribus aliquam molestiae. consectetur
            adipisicing elit. Quae, ateos aliquid reiciendis reprehenderit a
            corporis illo nisi deserunt ipsam doloribus aliquam molestiae.
            consectetur adipisicing elit. Quae, 
          </p>
        </div>
        <div className="right">

           <img src={Aboutuspic} alt="About us "/>

        </div>
        </div>
   
    </>
  );
};

export default Aboutus;
