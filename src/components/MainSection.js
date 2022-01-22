import React from "react";
import mainvideo from "../Assets/mainvideo.mp4";
import Circle from "../Assets/Circle.svg";
import Bchain from "../Assets/bchain.png";

import "./MainSection.css";
import Menu from "./Menu";
//import MianContent from "./MianContent";

const MainSection = () => {
  return (
    <div className="main-container">
      <video src={mainvideo} muted playsInline autoPlay loop></video>

      <div className="content-sec">
        <h3>All Digital Currencies in One Place</h3>
        <h1>
          All NFTs You need in One Marketplace The Best Place to Collect , Buy
          and Sell <span className="GradientText">Awesome NFTs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id unde
          officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. Cumque
          obcaecati sint officiis quis laboriosam vitae, error molestiae
          temporibus voluptatum consectetur, quibusdam magni, delectus a autem
          soluta optio laborum!
        </p>
        <div className="primary-btn">
          <button className="btn">DISCOVER MORE</button>
          <button className="btn">GET HELP</button>

          </div>
      </div>
      <img src={Circle} alt="circle" className="main-img" />

      <Menu />

      <img src={Bchain} alt="circle1" className="jkl" />
    </div>
  );
};

export default MainSection;
