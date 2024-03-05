// Donna Quach, JavaScript 320B Winter 2024
// Team Final Project with Pablo Rojas and Kyle Lemons - PetFinder 

import React from "react";
import GalleryNavBar from "../GalleryComponents/GalleryNavBar";
import StatusDogs from "../GalleryComponents/StatusDogs";
import httpstatusdogs from "../GalleryComponents/HTTPStatusDogs.json"; 

export default function Gallery() {
  return (
    <>
      <GalleryNavBar />
      <div className="statusDogsGallery">
        {httpstatusdogs.map((httpstatusdog, index) => (
          <StatusDogs 
            key={`statusDog-${index}`}
            image={httpstatusdog.image}
            statusCode={httpstatusdog.statusCode}
            description={httpstatusdog.description}
          />
        ))}
      </div>
    </>
  );
}
