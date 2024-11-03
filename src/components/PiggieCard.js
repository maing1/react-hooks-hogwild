import React, { useState } from "react";
import PiggieDetails from "./PiggieDetails";

function HogCard({ hog }) {
  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }

  // hide the hog
  if (isHidden) return null;

  // show the hog
  const { name, specialty, image } = hog;

  return (
    <div className="ui card eight wide column">
      <div className="image">
        <img src={image} alt="hogPic" />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
        <div className="description"> <b>Specialty:</b>{specialty}</div>
      </div>
      <div className="extra content">
        {showDetails ? <PiggieDetails hog={hog} /> : null}

        <button className="button" onClick={handleDetailsClick}>
          {showDetails ? "Less Info" : "More Info"}
        </button>
        <button className="button" onClick={() => setIsHidden(true)}>
          Hide Me{" "}
        </button>
      </div>
    </div>
  );
}

export default HogCard;