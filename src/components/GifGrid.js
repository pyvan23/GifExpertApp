import React, { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(category).then(setImages);
  }, [category]); //solo quiero que se ejecute el getGif solo una vez,el array de dependencias vacio hace eso

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid ">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //mando las propiedades
        ))}
      </div>
    </>
  );
};
