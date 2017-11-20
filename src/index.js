import React from "react";
import { render } from "react-dom";
import Menu from "./Menu";
import "./index.css";
import "./bulma.css";


const App = () => (
  <div>
    <Menu />
  </div>
);

render(<App />, document.getElementById("root"));
