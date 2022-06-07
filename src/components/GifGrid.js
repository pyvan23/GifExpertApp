import React from "react";
import { useGifFetch } from "../Hooks/useGifFetch";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useGifFetch(category);

  return (
    <>
      {loading ? <p className="animate__flash">Loading...</p> : <p> Ready</p>}
      <h3>{category}</h3>
      
      <div className="card-grid  ">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //mando las propiedades
        ))}
      </div>
    </>
  );
};
