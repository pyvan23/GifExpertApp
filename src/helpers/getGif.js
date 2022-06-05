 export const getGif = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=T0jhNhUKCXQemrRiO4MjJxcowy4HLIQd&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gif = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    // console.log(gif);
    return gif;
  };
  // getGif();