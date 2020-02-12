import React from "react";

function TwitterFilter(props) {
    return(
        <>
        <button onClick={() => props.employeeTwitter(props.id)} className="success">
        Employees on Twitter
      </button>
    </>
    )
}

export default TwitterFilter;