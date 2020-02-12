import React from "react";

const style = {
    dataStyle: {
        border: "0.02rem solid",
        padding: "0.6rem",
        fontWeight: "bold"
    }
}

function TableHead() {
    return (
        <>
        <div className="row">
        <div className="col-2 themed-grid-col" style={style.dataStyle} >
        NAME
        </div>
        <div className="col-2 themed-grid-col" style={style.dataStyle} >
        OCCUPATION
        </div>
        <div className="col-2 themed-grid-col" style={style.dataStyle}>
        LOCATION
        </div>
        <div className="col-2 themed-grid-col" style={style.dataStyle}>
        YEARS OF EXPERIENCE
        </div>
        <div className="col-2 themed-grid-col" style={style.dataStyle}>
        TWITTER
        </div>
        </div>
        </>
    )
    
}



export default TableHead;