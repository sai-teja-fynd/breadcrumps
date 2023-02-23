import React from "react";
import { Link } from "react-router-dom";
import {BreadCrumb,setBreadCrumpsItems} from "./BreadCrumbs/BreadCrumb";

function Page1() {
  setBreadCrumpsItems ('page1','/page1');
  return (
    <div className="page1">
      <BreadCrumb />
      <h1>Page1</h1>
      <Link to={"/page1/page1_2"}>page1_2</Link>
      <Link to={"/page1/page1_3"}>page1_3</Link>
    </div>
  );
}

export default Page1;
