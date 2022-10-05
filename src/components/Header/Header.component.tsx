import React from "react";
import IconComponent from "../IconComponent/IconComponent";
import "./Header.css";

interface HeaderProps extends React.HTMLProps<HTMLHeadElement> {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <h1>OpenAuto</h1>
      <div className="right-col">
        <IconComponent image="assets/call.svg" label="+769 586 4558" />
        <IconComponent image="assets/mail.svg" label="service@openauto.ca" />

        <button>Download the mobile app</button>
      </div>
    </header>
  );
};

export default Header;
