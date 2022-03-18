import React from "react";
import ReactDOM from "react-dom";
import { Sub } from "./second";

const Root = () => {
  return (
    <>
      <h1> Hello World </h1>
      <Sub />
    </>
  );
}

// @ts-ignore
window.loadApp = function() {
  console.log("about to render our react app");
  ReactDOM.render(
    <Root />,
    document.querySelector("#root")
  );
}
