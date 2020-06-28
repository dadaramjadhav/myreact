import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: 'pune',
            pin: '411046',
            errMessage: ''
        }
    }
    changeHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let em = ''
        let regExp = /^\d{6}$/
        if(nam == "pin"){
            if(!regExp.test(Number(val)))
            em = "invalid pin code"
        }
        this.setState({ [nam]: val })
        this.setState({ errMessage: em })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.address + '   ' + this.state.pin)
    }
    render() {
        return (
            <div>
                Address: {this.state.address}
                Pin: {this.state.pin}
                <form onSubmit={this.submitHandler}>
                    Address:
                    <input type="text" name="address"
                        onChange={this.changeHandler}
                    />
                    Pin:
                    <input
                        type="text" name="pin"
                        onChange={this.changeHandler}
                    />
                    {this.state.errMessage}
                    <input type="submit" value="submit"/>
                </form>

            </div>
        )
    }
}
export default Contact