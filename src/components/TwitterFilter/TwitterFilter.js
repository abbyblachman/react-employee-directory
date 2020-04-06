import React from "react";

const style = {
  margin: "0.5rem"
}

function TwitterFilter(props) {
    return(
        <>
        <button style={style} onClick={() => props.employeeTwitter(props.id)} className="btn btn-success">
        Employees on twitter
      </button>
    </>
    )
}

export default TwitterFilter;