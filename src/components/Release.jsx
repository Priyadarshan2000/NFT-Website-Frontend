import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/abc.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">●	About </h2>
          <p className="description">
          Bald n Beautiful is a collection of 10,000 unique NFT art works stored on the Ethereum Blockchain. The collection honours the beautiful ladies from all over the world who have been fighting Cancer.
            {/* via <a href="#">OpenSea</a> */}
          </p>
          <p className="description">
          BnB will provide the contributor with a one-of-a-kind representation of art while also contributing to cancer prevention, awareness, and diagnosis. 
          </p>
          <p className="description">Join us on our mission as we share the information in both the physical and digital worlds and help cancer warriors all across the world.</p>
          {/* <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">● Founder</h2>
          <p className="description">
          Akash (currently persuing PhD @KIT) had always the vision for giving back to the society and especially #Cancer Organizations and research institutes. He lost his grandma at very young age due to blood cancer and always from that day thought to help the #cancerworriors. His vision is to reform NFT space for a noble cause, and thus the journey of Bald&Beautiful began.
            {/* via <a href="#">OpenSea</a> */}
          </p>
          
         
          {/* <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
      </div>
    </div>
  );
}
