// src/components/StylistProfile.js

import React from 'react';
import './StylistProfile.css'; 

function StylistProfile({ name, specialty, bio, imgSrc }) {
  return (
    <div className="stylist-profile">
      <img src={imgSrc} alt={`${name}`} className="stylist-image" />
      <h3>{name}</h3>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p>{bio}</p>
    </div>
  );
}

export default StylistProfile;
