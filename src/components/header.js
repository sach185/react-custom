import React from "react";
import Link from "./link";

const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
    </div>
  );
};

export default Header;
