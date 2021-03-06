import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //no se refresca el browser
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats ]); //llamamos las props que vienen del componente padre
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="inputBox" type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes={
 setCategories:PropTypes.func.isRequired
}