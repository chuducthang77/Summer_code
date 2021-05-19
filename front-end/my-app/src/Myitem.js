import React from 'react';

class Item extends React.Component {
    // Adding state to the components

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100
        }
    }
    
    // Click events

    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1,
        })
    }

    //Render component

    render() {
      return (
        <div>
            <h1 onClick={() => this.clickMe()}>Hello world {this.props.name} {this.props.age}</h1>
            <span>{this.state.clicks} is the number of clicks</span>
            <span>{this.state.totalRemaining} is the number of remaining</span>
        </div>
        
      )
    }
}

export default Item;