import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page1_2 from "./Page1_2";
import Page1_3 from "./Page1_3";
import Page2 from "./Page2";
import { setBreadCrumpsItems } from "./BreadCrumb";

function App() {
  // const BreadCrumbItems = {
  //   home: {
  //     path: "/",
  //     Page1: {
  //       path: "/page1",
  //       Page1_2: {
  //         path: "/page1/page1_2",
  //       },
  //       Page1_3: {
  //         path: "/page1/page1_3",
  //       },
  //     },
  //     page2: {
  //       path: "/path2",
  //     },
  //   },
  // };

  // setBreadCrumpsItems(
  //   { BreadCrumbItems },
  //   ">"
  // );



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page1/page1_2" element={<Page1_2 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1/page1_3" element={<Page1_3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
