import React from "react";
import {BreadCrumb,setBreadCrumpsItems} from "./BreadCrumbs/BreadCrumb";

function Page1_3() {
  setBreadCrumpsItems ('page1_3','/page1/page1_3');
  return (
    <div className="home">
      <BreadCrumb currentRoute='/page1/page1_3' />
      <h1>Page1_3</h1>
    </div>
  );
}

export default Page1_3;
