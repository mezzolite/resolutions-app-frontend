import React from 'react'
import ResolutionCard from '../components/ResolutionCard'

const CompleteResolutionsContainer=({resolutions})=>{
    
    const showResolutions = resolutions.map(resolution => {
        return <ResolutionCard resolution={resolution} key={resolution.id} />
     })
 
     return(
         <div className="resolution-container">
             <h2>Complete Resolutions</h2>
             {showResolutions}
         </div>
     )
}
export default CompleteResolutionsContainer