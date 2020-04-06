import React from "react";

function Container(props) {
  return (
    <div className="py-4">
      <div className="container">
        {props.children}
      </div>
      </div>

  );
}

export default Container;
