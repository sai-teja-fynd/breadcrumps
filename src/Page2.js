import React from "react";
import {BreadCrumb,setBreadCrumpsItems} from "./BreadCrumbs/BreadCrumb";

function Page2() {
  setBreadCrumpsItems("page2",   "/page2");
  return (
    <div className="page2">
      <BreadCrumb />
      <h1>Page2</h1>
    </div>
  );
}

export default Page2;
