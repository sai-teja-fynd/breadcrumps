import React from "react";
import { Link } from "react-router-dom";
import { setBreadCrumpsItems } from "./BreadCrumbs/BreadCrumb";

function Home() {
  setBreadCrumpsItems("home", "/");
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to={"/page1"}>page1</Link>
      <br />
      <Link to={"/page2"}>page1</Link>
    </div>
  );
}

export default Home;
