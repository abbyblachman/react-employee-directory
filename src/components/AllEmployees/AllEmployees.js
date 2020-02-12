import React from "react";

function AllEmployees(props) {
    return(
        <>
        <button onClick={() => props.allEmployees(props.id)} className="success">
        All Employees
      </button>
    </>
    )
}

export default AllEmployees;