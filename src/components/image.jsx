import React, { useContext } from "react";
import { ImageContext } from "../context/image_context";
import imageStyles from "./imageStyles.module.css";

function Video() {
  const [response] = useContext(ImageContext);
  const { container, img } = imageStyles;
  return (
    <div>
      <div className={container}>
        <img className={img} src={response} alt="" />
      </div>
    </div>
  );
}

export default Video;
