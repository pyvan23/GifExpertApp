import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["pokemon"]);

  return (
    <>
      <h2>Gif-Expert-App</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol > 
        {categories.map((category) => (
          <GifGrid 
          key={category}
          category={category} />
        ))}
      </ol>
    </>
  );
};
