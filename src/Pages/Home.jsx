import React from "react";
import NavBar from "../HomeComponents/NavBar";
import Developers from "../HomeComponents/Developers";
import devs from "../HomeComponents/Devs.json";
import Mission from "../HomeComponents/Mission";
import { Slideshow } from "../HomeComponents/Slideshow";
import { slides } from "../HomeComponents/SlideshowData.json";

export default function Home() {
  return (
    <>
      <NavBar />
      <Slideshow data={slides} />
      <Mission />
      <div className="team">
        {devs.map((dev, index) => (
          <Developers
            key={`dev-member-${index}`}
            image={dev.image}
            name={dev.name}
            devType={dev.devType}
            funFacts={dev.funFacts}
          />
        ))}
      </div>
    </>
  );
}
