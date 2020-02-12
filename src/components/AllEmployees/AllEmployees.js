import React from "react";

const style = {
  margin: "0.5rem"
}

function AllEmployees(props) {
    return(
        <>
        <button style={style} onClick={() => props.allEmployees(props.id)} className="btn btn-primary">
        All Employees
      </button>
    </>
    )
}

export default AllEmployees;