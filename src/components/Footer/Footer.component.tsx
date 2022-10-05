import React from "react";
import IconComponent from "../IconComponent/IconComponent";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./footer.css";

interface FooterComponentProps extends React.HTMLAttributes<any> {}

const Footer: React.FC<FooterComponentProps> = ({}) => {
  return (
    <footer className="footer container">
      <section className="top-row">
        <h2>OpenAuto</h2>
        <div className="icons">
          <IconComponent image="assets/call.svg" label="+769 586 4558" />
          <IconComponent image="assets/mail.svg" label="service@openauto.ca" />
        </div>
      </section>

      <section className="bottom-row">
        <p className="desc">OpenAuto @ all rights reserved</p>
        <div className="imps">
          <small>Privacy Policy</small>
          <small>Terms Of Use</small>
          <small>Cookie Policy</small>
        </div>

        <SocialIcons />
      </section>
    </footer>
  );
};

export default Footer;
