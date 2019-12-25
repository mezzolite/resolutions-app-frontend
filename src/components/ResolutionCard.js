import React from 'react'

const ResolutionCard=({resolution})=>{
    return(
        <div className="resolution-card">
            <h3>{resolution.description}</h3>
            <h4>Start Date: {resolution.start_date}</h4>
            <input type="checkbox" name="complete" />

        </div>
    )
}
export default ResolutionCard