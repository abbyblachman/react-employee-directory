import React from "react";

const style = {
  dataStyle: {
    border: "0.02rem solid", 
    padding: "1rem",
    backgroundColor: "#ECEBE9"
  }
}

function TableData(props) {
  return (
    <>
    <div className="row mb-3">
          <div className="col-2 themed-grid-col" style={style.dataStyle}>
           {props.name}
          </div>
          <div className="col-2 themed-grid-col" style={style.dataStyle}>
            {props.occupation}
          </div>
          <div className="col-2 themed-grid-col" style={style.dataStyle}>
            {props.location}
          </div>
          <div className="col-2 themed-grid-col" style={style.dataStyle}>
            {props.years}
          </div>
          <div className="col-2 themed-grid-col" style={style.dataStyle}>
          </div>
    </div>
    </>
  );
}

export default TableData;