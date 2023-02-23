import React, { useEffect, useState } from "react";
import "./breadcrumb.css";
import BreadCrumbItem from "./BreadCrumbItem";

let BreadCrumbItemsAll, separatorToShow;

export function BreadCrumb({ currentRoute }) {
  const [breadCrumbItemsToShow, setBreadCrumbItemsToShow] = useState([]);

  function getBreadCrumpItems(BreadCrumbItems, currentRoute, tempPathArr) {
    for (const key in BreadCrumbItems) {
      if (BreadCrumbItems[key].path === currentRoute) {
        tempPathArr.push({ label: key, link: BreadCrumbItems[key].path });
        setBreadCrumbItemsToShow([...tempPathArr]);
        return;
      } else if (typeof BreadCrumbItems[key] == "object") {
        tempPathArr.push({ label: key, link: BreadCrumbItems[key].path });
        getBreadCrumpItems(BreadCrumbItems[key], currentRoute, tempPathArr);
        tempPathArr.pop();
      }
    }
  }

  useEffect(() => {
    getBreadCrumpItems(BreadCrumbItemsAll, currentRoute, []);
  }, [currentRoute]);

  const arrSize = breadCrumbItemsToShow.length;
  return (
    <div className="bread-crumb">
      <nav className="bread-crumb-nav">
        <ul>
          {breadCrumbItemsToShow.map((BreadCrumbElement, idx) => {
            return (
              <li>
                <BreadCrumbItem
                  key='idx'
                  BreadCrumb={BreadCrumbElement}
                  separator={separatorToShow}
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

export function setBreadCrumpsItems({ BreadCrumbItems }, separator) {
  BreadCrumbItemsAll = BreadCrumbItems;
  separatorToShow = separator;
}
