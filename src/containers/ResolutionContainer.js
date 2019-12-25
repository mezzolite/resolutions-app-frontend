import React from 'react'
import ResolutionCard from '../components/ResolutionCard'

const ResolutionContainer = ({resolutions}) =>{

    const showResolutions = resolutions.map(resolution => {
       return <ResolutionCard resolution={resolution} key={resolution.id} />
    })

    return(
        <div className="resolution-container">
            <h2>Current Resolutions</h2>
            {showResolutions}
        </div>
    )
}
export default ResolutionContainer