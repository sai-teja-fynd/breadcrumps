import React, { useEffect, useState } from "react";
import "../breadcrumb.css";
import BreadCrumbItem from "../BreadCrumbItem";

let BreadCrumbItemsAll = [];

export function BreadCrumb() {
  const arrSize = BreadCrumbItemsAll.length;
  return (
    <div className="bread-crumb">
      <nav className="bread-crumb-nav">
        <ul>
          {BreadCrumbItemsAll.map((BreadCrumbElement, idx) => {
            return (
              <li>
                <BreadCrumbItem
                  key="idx"
                  BreadCrumb={BreadCrumbElement}
                  separator={">"}
                  isLast={idx === arrSize - 1}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function setBreadCrumpsItems(label, link) {
  BreadCrumbItemsAll.forEach((ele, idx) => {
    if (ele.label === label) {
      BreadCrumbItemsAll.splice(idx);
    }
  });
  BreadCrumbItemsAll.push({ label: label, link: link });
  console.log("BreadCrumbItemsAll", BreadCrumbItemsAll);
}
