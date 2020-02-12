import React from "react";

// const style = {
//   body: {
//     background: "black" 
//   },
//   fontColor: {
//     color: "white"
//   }
// }


function Container(props) {
  return (
    <div className="py-4">
      <div className="container">
        {props.children}
        {/* <h1>Employee Directory</h1>
        <p className="lead">A fast and easy way to search for employees.</p>
        <p>You can filter the employee directory to see specific results.</p> */}
      </div>
      </div>

  );
}

export default Container;
