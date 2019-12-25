import React, { Component } from 'react'
import ResolutionContainer from './ResolutionContainer'
import CompleteResolutionsContainer from './CompleteResolutionsContainer'
import NewResolutionForm from '../components/NewResolutionForm'

class MainContainer extends Component{

    state = {
        resolutions:[],
        completeResolutions: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/resolutions")
            .then(response => response.json())
            .then(resolutions => resolutions.map(resolution => {
                if(!resolution.complete){
                    this.setState({resolutions: [...this.state.resolutions, resolution]})
                } else {
                    this.setState({completeResolutions: [...this.state.completeResolutions, resolution]})
                }
            }))
    }

    render(){
        return(
        <>
            <h1>Resolute!</h1>
            <h2>Maybe this year!</h2>
            <ResolutionContainer resolutions={this.state.resolutions}/>
            <CompleteResolutionsContainer resolutions={this.state.completeResolutions} />
            <NewResolutionForm />
        </>
        )
    }
}
export default MainContainer