import React from "react";

function ExperienceSort(props) {
    return(
        <>
        <button onClick={() => props.employeeTwitter(props.id)} className="success">
        Employees on Twitter
      </button>
    </>
    )
}

export default ExperienceSort;