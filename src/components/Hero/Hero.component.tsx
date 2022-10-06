import React, { useEffect, useState } from "react";
import createUser from "../../apis/createUser";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./Hero.css";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

const Hero: React.FC<HeroProps> = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // createUser("testuser2", "testuser2@mail.com").then((res) => {
    //   console.log(res);
    // });
  }, []);
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
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />

          <button
            className="submit"
            onClick={() => {
              createUser(name, email).then((res) => {
                console.log({ res: res.data.stats, user: res.data.user });
                alert("user created");
              });
            }}
          >
            Submit
          </button>
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
