import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("hola mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
