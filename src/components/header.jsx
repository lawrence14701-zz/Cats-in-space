import React from "react";
import headerStyles from "./headerStyles.module.css";

function Header() {
  const { container } = headerStyles;
  return <h1 className={container}>Cats in space</h1>;
}

export default Header;
