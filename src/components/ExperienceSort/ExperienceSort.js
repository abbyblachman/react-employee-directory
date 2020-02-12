import React from "react";

const style = {
  margin: "0.5rem"
}

function ExperienceSort(props) {
    return(
        <>
        <button style={style} onClick={() => props.experienceSort(props.id)} className="btn btn-warning">
        Sort by years of experience
      </button>
    </>
    )
}

export default ExperienceSort;