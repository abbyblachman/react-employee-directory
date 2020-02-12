import React from "react";
import Table from "../Table/Table"
import { black } from "color-name";

const style = {
  body: {
    background: "black" 
  },
  fontColor: {
    color: "white"
  }
}


function Container() {
  return (
    <body className = "py-4" style={style.body}>
      <div className="container" style={style.fontColor}>
        <h1>Employee Directory</h1>
        <p className="lead">A fast and easy way to search for employees.</p>
        <p>You can filter the employee directory to see specific results.</p>
        <Table></Table>
      </div>
    </body>
  );
}

export default Container;
