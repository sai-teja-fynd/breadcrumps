import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbItem({ BreadCrumb, separator, isLast }) {
  //   console.log({ BreadCrumb, seperator, isLast });
  return (
    <div className="bread-crumb-item">
      <Link
        className={`bread-crumb-item-label  ${isLast ? "active-bread-crumb-label" : ""}`}
        to={BreadCrumb.link}
      >
        {BreadCrumb.label}
      </Link>
      {!isLast && <span className="bread-crumb-separator">{separator}</span>}
    </div>
  );
}

export default BreadCrumbItem;
