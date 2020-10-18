import React, { useContext } from "react";
import { ImageContext } from "../context/image_context";
import Loading from "./loading";

function Video() {
  const [response] = useContext(ImageContext);
  console.log(response, "data");
  return <div>{response ? <div>hi</div> : <Loading />}</div>;
}

export default Video;
