import axios from "axios";

// const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;
const url = "https://api.thecatapi.com/v1/images/search";

export const fetchData = async () => {
  try {
    const data = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    window.alert("Error:  Failed to fetch images");
  }
};
