import React from "react";
import refreshStyles from "./refreshStyles.module.css";
import cx from "classnames";

function RefreshButton() {
  const { buttons, btnColor, icon, button } = refreshStyles;
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={buttons}>
      <button onClick={refreshPage} className={cx(btnColor, button)}>
        <img
          alt="refresh"
          className={icon}
          src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"
        />
      </button>
    </div>
  );
}

export default RefreshButton;
