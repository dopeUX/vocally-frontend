import React from "react";
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
        <img src="assets/image1.png" alt="" />
        <div className="social-icons">
          <img className="icon" src="assets/fb.svg" alt="" />
          <img className="icon" src="assets/twitter.svg" alt="" />
          <img className="icon" src="assets/youtube.svg" alt="" />
          <img className="icon" src="assets/linkedin.svg" alt="" />
          <img className="icon" src="assets/insta.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
