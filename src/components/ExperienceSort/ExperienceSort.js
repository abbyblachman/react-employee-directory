import React from "react";

function ExperienceSort(props) {
    return(
        <>
        <button onClick={() => props.experienceSort(props.id)} className="success">
        Sort by years of experience
      </button>
    </>
    )
}

export default ExperienceSort;