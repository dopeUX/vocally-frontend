import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./Hero.css";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="hero container">
      <div className="left-col">
        <h2 className="">Vehicle Maintenance From The Comfort Of Your Home</h2>

        <p className="desc">
          Open Auto Soothes the hassle of maintaining your vehicle and helps you
          deal with unexpected repairs worry-free
        </p>

        <div className="detail-form">
          <input
            type="text"
            className="text-box"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter your email"
          />

          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="right-col">
        <img className="image1" src="assets/image1.png" alt="" />
        <div className="icons">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
