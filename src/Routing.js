import Home from "./Home";
import Page1 from "./Page1";
import Page1_2 from "./Page1_2";
import Page1_3 from "./Page1_3";
import Page2 from "./Page2";

const routes = [
  { path: '/', name: "home", component: Home },
  { path: "/page1", name: "page1", component: Page1 },
  { path: "/page1/page1_2", name: "page1_2", component: Page1_2 },
  { path: "/page1/page1_3", name: "page1_3", component: Page1_3 },
  { path: "/page2", name: "page2", component: Page2 },
];

export default routes;
