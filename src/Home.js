import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            count: 0
        }
    }
    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        }, ()=>{console.log("incremented value"+ this.state.count)})
    }
    incrementFive = ()=>{
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        const {name, address} = this.props
        
        return (
            <div>
                <h1>{name}... {address}</h1>
                <h1>{this.state.count} </h1>
                <button onClick={this.incrementFive}>Increment </button>
            </div>
        )
    }

}

export default Home;