import React, { memo } from "react";
import Loader from "react-loader-spinner";

function Spinner() {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default memo(Spinner);