import React from "react";
import "./detailsSection.css";

interface DetailsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const DetailsSection: React.FC<DetailsSectionProps> = ({}) => {
  return (
    <div className="details-section container">
      <div className="left-col">
        <img src="assets/image2.png" alt="" />
      </div>

      <div className="right-col">
        <h2>Focused On Time Saving</h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="download-btn">Download the mobile app</button>
      </div>
    </div>
  );
};

export default DetailsSection;
