import axios from "axios";

const url = `https://api.thecatapi.com/v1/images/search?key=${process.env.REACT_APP_API_KEY}&category_ids=2`;

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const catImageUrl = data[0].url;
    return catImageUrl;
  } catch (error) {
    window.alert("Error:  Failed to fetch images");
  }
};
