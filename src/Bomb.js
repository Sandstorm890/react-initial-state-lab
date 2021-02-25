// your Bomb code here!
import React from "react"


class Bomb extends React.Component {

    state = {secondsLeft: this.props.intialCount}

    render() {
        
        if (this.state.secondsLeft === 0) {
            return(
                <p>Boom!</p>
            )
        } else {
            console.log(this.state.secondsLeft)
            
            return(
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
            

        }
         
    }

}

export default Bomb