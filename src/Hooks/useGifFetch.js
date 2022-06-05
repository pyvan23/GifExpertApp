import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useGifFetch = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]); //solo quiero que se ejecute el getGif solo una vez,el array de dependencias vacio hace eso
                  //cambia cuando hay una nueva category
  return state;
};
