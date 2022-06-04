import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Pokemon",
    "Dragon Ball",
    "Naruto",
  ]);

  // const handleGifAdds = () => {
  //   setCategories((cats) => [...cats, "Digimon"]);
  // }; ///recibe un callback el state donde el primer argumento que devolvemos es el estado anterior,luego debe devolver el nuevo estado

  return (
    <>
      <h2>Gif-Expert-App</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((categories) => {
          return <li key={categories}>{categories}</li>;
        })}
      </ol>
    </>
  );
};
