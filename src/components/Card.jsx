import React from 'react';
import './Card.css';


const Card = ({ title, image, description , projectUrl }) => {

  const HandleClick = () => {
    window.open(projectUrl, "_blank");
  }

  return (
    <div className="project-card" onClick={HandleClick}>

      <div className="card-img">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default Card;

