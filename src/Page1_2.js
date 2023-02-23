import React from "react";
import { setBreadCrumpsItems } from "./BreadCrumbs/BreadCrumb";

function Page1_2() {
  setBreadCrumpsItems("page1_2", "/page1/page1_2");
  return (
    <div className="home">
      <h1>Page 1_2</h1>
    </div>
  );
}

export default Page1_2;
