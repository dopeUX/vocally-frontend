import React from "react";
import "./IconComponent.css";

interface IconComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  label: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ image, label }) => {
  return (
    <div className="icon-component">
      <img src={image} alt="" />
      <small>{label}</small>
    </div>
  );
};

export default IconComponent;
