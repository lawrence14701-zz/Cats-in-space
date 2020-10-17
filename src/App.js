import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    (async () => {
      console.log(API_KEY);
      const data = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=dogs&maxResults=5`
      );
      console.log(data);
    })();
  }, []);
  return <div className="App">hi</div>;
}

export default App;